import { Component, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';
import state from '../../util/state';
import { UserSession } from '@esri/arcgis-rest-auth';
import { ArcGISContextManager } from '@esri/hub-common';

@Component({
  tag: 'arcgis-hub-identity',
  styleUrl: 'arcgis-hub-identity.css',
  shadow: true,
})
export class ArcgisHubIdentity {
  @Prop({ mutable: true }) clientId: string = null;
  @Prop({ mutable: true }) redirect: string = null;
  @Prop({ mutable: true }) portalUrl: string = 'https://www.arcgis.com';
  @Prop({ mutable: true }) user: any = null;
  @Prop({ mutable: false }) origin: string = null;

  // @ts-ignore
  identityEl: HTMLArcgisAppIdentityElement;

  async componentWillLoad() {
    // the redirect may be set after loading based on deploy host
    state.app = {
      client: this.clientId,
      redirect: this.redirect,
      portal: this.portalUrl,
    };
    if (!!this.origin) {
      const session = await UserSession.fromParent(this.origin);
      // session is a UserSession instance, populated from the parent app
      // create a Hub context and store for use in other components with auth
      try {
        const ctxMgr = await ArcGISContextManager.create({ authentication: session });
        state.context = ctxMgr.context;
        this.arcgisHubIdentitySignedIn.emit(state.context);
      } catch (err) {
        console.debug('arcgis-hub-identity: Embedded session not found', err);
      }

      // })
      // .catch((_ex) => {
      //   // The only case it will reject is if the parent is unable to return a credential
      //   // if the parent does not see the child as a valid origin, the parent will never respond.
      //   console.debug("arcgis-hub-identity: Embedded session not found", _ex);

      // });
    }
  }
  /**
   * reference to sign-in button for onclick events
   */
  signinButton: HTMLButtonElement;

  signinClick() {
    const evt = new CustomEvent('arcgisAppIdentityStartSignIn');
    document.dispatchEvent(evt);
  }
  signoutClick() {
    const evt = new CustomEvent('arcgisAppIdentityStartSignOut');
    document.dispatchEvent(evt);
  }

  @Event() arcgisHubIdentitySignedIn: EventEmitter;

  @Listen('arcgisAppIdentitySignedIn')
  signedinEvent(evt) {

    const tokenExpires = state?.context?._authentication?._tokenExpires;
    const now = new Date();
    if (tokenExpires < now) {
      const evt = new CustomEvent('arcgisAppIdentityStartSignOut');
      document.dispatchEvent(evt);
    } else {
      state.context = evt.detail;
      console.debug('arcgis-hub-identity: arcgisAppIdentitySignedIn');

      this.arcgisHubIdentitySignedIn.emit(evt.detail);
    }
  }
  @Listen('arcgisAppIdentitySignedOut')
  signedoutEvent(_evt) {
    state.context = null;
  }

  render() {
    return (
      <Host>
        <span id="profile">
          <arcgis-app-identity ref={el => (this.identityEl = el)} client-id={state.app.client} redirect-uri={state.app.redirect} portal={state.app.portal}>
            <slot></slot>
          </arcgis-app-identity>

          {this.renderIdentity()}
        </span>
      </Host>
    );
  }

  renderIdentity() {
    if (!!state.user) {
      // return `Welcome ${state.user?.fullName}`
      return state.user?.fullName;
      // return (
      //   <calcite-dropdown>
      //     <calcite-button slot="dropdown-trigger">{state.user?.fullName}</calcite-button>
      //     <calcite-dropdown-group>
      //       <calcite-dropdown-item
      //         onclick={this.signoutClick}
      //       >Sign Out</calcite-dropdown-item>
      //     </calcite-dropdown-group>
      //   </calcite-dropdown>
      // )
    } else {
      return [
        <div class="wrapper">
          <div>Sign in:</div>
          <calcite-button ref={el => (this.signinButton = el)} onClick={this.signinClick}>
            Sign In
          </calcite-button>
        </div>,
      ];
    }
  }
}
