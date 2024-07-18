/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ArcgisHubIdentity {
        "clientId": string;
        "origin": string;
        "portalUrl": string;
        "redirect": string;
        "user": any;
    }
    interface TelemetryCard {
        /**
          * Unique card identifier for binding configuration
         */
        "cardId": string;
        /**
          * Card configuration using Telemetry configuration schema
         */
        "configuration": any;
        /**
          * Data returned from Telemetry API
         */
        "data": any;
    }
    interface TelemetryCardEditor {
        /**
          * Unique Card ID - used in events to know which card's configuration has been updated
         */
        "cardId": string;
        /**
          * Configuration object for the card
         */
        "configuration": any;
    }
    interface TelemetryDashboard {
    }
}
export interface ArcgisHubIdentityCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLArcgisHubIdentityElement;
}
export interface TelemetryCardEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTelemetryCardEditorElement;
}
declare global {
    interface HTMLArcgisHubIdentityElement extends Components.ArcgisHubIdentity, HTMLStencilElement {
    }
    var HTMLArcgisHubIdentityElement: {
        prototype: HTMLArcgisHubIdentityElement;
        new (): HTMLArcgisHubIdentityElement;
    };
    interface HTMLTelemetryCardElement extends Components.TelemetryCard, HTMLStencilElement {
    }
    var HTMLTelemetryCardElement: {
        prototype: HTMLTelemetryCardElement;
        new (): HTMLTelemetryCardElement;
    };
    interface HTMLTelemetryCardEditorElement extends Components.TelemetryCardEditor, HTMLStencilElement {
    }
    var HTMLTelemetryCardEditorElement: {
        prototype: HTMLTelemetryCardEditorElement;
        new (): HTMLTelemetryCardEditorElement;
    };
    interface HTMLTelemetryDashboardElement extends Components.TelemetryDashboard, HTMLStencilElement {
    }
    var HTMLTelemetryDashboardElement: {
        prototype: HTMLTelemetryDashboardElement;
        new (): HTMLTelemetryDashboardElement;
    };
    interface HTMLElementTagNameMap {
        "arcgis-hub-identity": HTMLArcgisHubIdentityElement;
        "telemetry-card": HTMLTelemetryCardElement;
        "telemetry-card-editor": HTMLTelemetryCardEditorElement;
        "telemetry-dashboard": HTMLTelemetryDashboardElement;
    }
}
declare namespace LocalJSX {
    interface ArcgisHubIdentity {
        "clientId"?: string;
        "onArcgisHubIdentitySignedIn"?: (event: ArcgisHubIdentityCustomEvent<any>) => void;
        "origin"?: string;
        "portalUrl"?: string;
        "redirect"?: string;
        "user"?: any;
    }
    interface TelemetryCard {
        /**
          * Unique card identifier for binding configuration
         */
        "cardId"?: string;
        /**
          * Card configuration using Telemetry configuration schema
         */
        "configuration"?: any;
        /**
          * Data returned from Telemetry API
         */
        "data"?: any;
    }
    interface TelemetryCardEditor {
        /**
          * Unique Card ID - used in events to know which card's configuration has been updated
         */
        "cardId"?: string;
        /**
          * Configuration object for the card
         */
        "configuration"?: any;
        "onTelemetryConfigurationUpdated"?: (event: TelemetryCardEditorCustomEvent<any>) => void;
    }
    interface TelemetryDashboard {
    }
    interface IntrinsicElements {
        "arcgis-hub-identity": ArcgisHubIdentity;
        "telemetry-card": TelemetryCard;
        "telemetry-card-editor": TelemetryCardEditor;
        "telemetry-dashboard": TelemetryDashboard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "arcgis-hub-identity": LocalJSX.ArcgisHubIdentity & JSXBase.HTMLAttributes<HTMLArcgisHubIdentityElement>;
            "telemetry-card": LocalJSX.TelemetryCard & JSXBase.HTMLAttributes<HTMLTelemetryCardElement>;
            "telemetry-card-editor": LocalJSX.TelemetryCardEditor & JSXBase.HTMLAttributes<HTMLTelemetryCardEditorElement>;
            "telemetry-dashboard": LocalJSX.TelemetryDashboard & JSXBase.HTMLAttributes<HTMLTelemetryDashboardElement>;
        }
    }
}
