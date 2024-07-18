import { Component, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'telemetry-card-editor',
  styleUrl: 'telemetry-card-editor.css',
  shadow: true,
})
export class TelemetryCardEditor {

  /**
   * Unique Card ID - used in events to know which card's configuration has been updated
   */
  @Prop() cardId: string = null;

  /**
   * Configuration object for the card
   */
  @Prop({ mutable: true, reflect: true }) configuration: any = {};

  // private configurationEl: any;

  // see Telemetry API reference https://confluencewikidev.esri.com/display/Hub/Telemetry+API+Reference
  private schema = {
    type: 'object',
    required: ['hostname'],
    properties: {
      hostname: {
        type: 'string',
        maxLength: 255,
        default: 'dc.esri.com'
      },
      startDate: {
        type: 'string',
        default: "2024-07-01"
      },
      endDate: {
        type: 'string',
        default: "2024-08-01"
      },      
      metrics: {
        type: 'string',
        enum: ['page-views:count', "other-events:count"],
        default: 'page-views:count'
      },
      dimensions: {
        type: 'string',
        enum: ['', 'contentId', 'dimension2'],
        default: ''
      },
      timeDimension: {
        type: 'string',
        enum: ["hour", "day", "week", "month"],
        default: "day",
      },
      orderByName: {
            type: 'string',
            enum: ["day", "page-views:count", "other-events:count"],
            default: "day"
          },
          orderByDirection: {
            type: 'string',
            enum: ["asc", "desc"],
            default: "asc"
          }
        
      }
    }
  
  // see https://friendly-adventure-7w1eyl2.pages.github.io/harnesses/html/arcgis-configuration-editor/configuration-editor-fields.html
  private uiSchema = {
    "type": "Layout",
    "elements": [
      {
        "label": "Hostname",
        "scope": "/properties/hostname",
        "type": "Control",
        "options": {}
      },{
        "label": "Start Date",
        "scope": "/properties/startDate",
        "type": "Control",
        "options": {
          "control": "hub-field-input-date"
        }
      },{
        "label": "End Date",
        "scope": "/properties/endDate",
        "type": "Control",
        "options": {
          "control": "hub-field-input-date"
        }
      },{
        "label": "Metrics",
        "scope": "/properties/metrics",
        "type": "Control",
        "options": {
          "control": "hub-field-input-radio-group",
        }
      },{
        "label": "Dimensions",
        "scope": "/properties/dimensions",
        "type": "Control",
        "options": {
          "control": "hub-field-input-radio-group",
          "labels": [
            "None",
            "Content ID",
            "User Type"
          ]
        }
      },{
        "label": "timeDimension",
        "scope": "/properties/timeDimension",
        "type": "Control",
        "options": {
          "control": "hub-field-input-radio-group",
        }
      },{
        "label": "Order by Name",
        "scope": "/properties/orderByName",
        "type": "Control",
        "options": {
          "control": "hub-field-input-radio-group",
        }
      },{
        "label": "Order by Direction",
        "scope": "/properties/orderByDirection",
        "type": "Control",
        "options": {
          "control": "hub-field-input-radio-group",
          "labels": [
            "Ascending",
            "Descending"
          ]
        }
      }
    ]
  }

  private convertConfiguration(configuration) {
    const newConfiguration:any = {
      scope: {
        hostname: configuration.hostname
      },
      dateRange: {
        startDate: configuration.startDate,
        endDate: configuration.endDate
      },
      metrics: [configuration.metrics],
      timeDimension: configuration.timeDimension,
      orderBy: [{
        name: configuration.orderByName,
        direction: configuration.orderByDirection
      }]
    }
    if(!!configuration.dimensions && configuration.dimensions.length > 0) {
      newConfiguration.dimensions = [configuration.dimensions]
    }
    return newConfiguration;

  }

  @Event() telemetryConfigurationUpdated: EventEmitter<any>;

  @Listen('arcgisConfigurationEditorChange')
  async configurationChanged(event) {
    // const newConfiguration = await this.configurationEl.values;
    const newConfiguration = this.convertConfiguration(event.detail.values);
    
    console.debug('telemetry-card-editor: updateConfiguration', newConfiguration);
    // this.saveConfiguration();
    this.telemetryConfigurationUpdated.emit({
      cardId: this.cardId,
      configuration: newConfiguration
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>

          <h3 slot="title">Card Editor</h3>
          <div slot="content">
            <arcgis-configuration-editor
              schema={this.schema}
              uiSchema={this.uiSchema}
              values={this.configuration}
              // ref={el => (this.configurationEl = el)}
            ></arcgis-configuration-editor>
          </div>
      </Host>
    );
  }

}
