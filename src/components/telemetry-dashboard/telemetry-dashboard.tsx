import { Component, Host, Listen, State, h } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
// setAssetPath("./assets");
setAssetPath('https://js.arcgis.com/calcite-components/2.10.1/assets');

@Component({
  tag: 'telemetry-dashboard',
  styleUrl: 'telemetry-dashboard.css',
  shadow: true,
})
export class TelemetryDashboard {

  @State() cardEls: {} = {};

  // prototype card id
  private cardId = 'card1';

  @Listen('telemetryConfigurationUpdated')
  updateCardConfiguration(event: CustomEvent) {
    console.debug('telemetryConfigurationUpdated', event.detail);
    const updatedCardId = event.detail.cardId;
    const updatedConfiguration = event.detail.configuration;

    console.debug('Updated card id:', updatedCardId, this.cardEls, updatedConfiguration);
    // Get the card by id
    this.cardEls[updatedCardId].configuration = updatedConfiguration;
  }

  render() {
    return (
      <Host>
        <div id="dashboard">
          <div id="header">
            <slot name='header'></slot>
          </div>
          <div id="sidebar">
            <telemetry-card-editor
              cardId={this.cardId}
            ></telemetry-card-editor>
          </div>
          <div id="canvas">
            <telemetry-card
              cardId={this.cardId}
              ref={el => (this.cardEls[this.cardId] = el)}
            ></telemetry-card>
          </div>
        </div>
      </Host>
    );
  }

}
