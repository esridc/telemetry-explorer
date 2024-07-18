import { Component, Host, Prop, Watch, h } from '@stencil/core';
import state from '../../util/state';
const telemetryApiUrl = "https://hub.arcgis.com/api/telemetry/v1/report";

@Component({
  tag: 'telemetry-card',
  styleUrl: 'telemetry-card.css',
  shadow: true,
})
export class TelemetryCard {

  /**
   * Unique card identifier for binding configuration
   */
  @Prop() cardId: string = null;

  /**
   * Card configuration using Telemetry configuration schema
   */
  @Prop() configuration: any;

  /**
   * Data returned from Telemetry API
   */
  @Prop({ mutable: true, reflect: true }) data: any;

  private async fetchTelemetry(configuration) {
    const response = await fetch(telemetryApiUrl, {
      method: 'POST',
      body: JSON.stringify(configuration),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': state.context.hubRequestOptions.authentication.token
      }
    })
    const data = JSON.parse(await response.text());
    return data;
  }

  @Watch('configuration')
  async updateTelemetryData(newConfiguration) {
    if (!!this.configuration) {
      try {
        this.data = await this.fetchTelemetry(newConfiguration);
        console.debug('Telemetry Data:', this.data);
      } catch (error) {
        console.error('Error fetching telemetry data:', error);
      }
    }
  }

  render() {
    return (
      <Host>
        <calcite-card>
          <h2 slot="title">Card {this.cardId}</h2>
          
          {!!this.configuration &&  !!this.data?.data && this.renderTable(this.data)}
          <code>
            {!!this.configuration ? JSON.stringify(this.configuration, null, 2) : 'No configuration'}
          </code>
        </calcite-card>
      </Host>
    );
  }

  renderTable(data) {
    const rows =  [];
    // header row
    const headers = [<calcite-table-header 
      heading="Timestamp" 
      description=""
    ></calcite-table-header>]
    if (!!this.configuration.dimensions && this.configuration.dimensions.length > 0) {
      headers.push(<calcite-table-header 
        heading="Dimension" 
        description={this.configuration.dimensions[0]}
      ></calcite-table-header>)
    }
    if (!!this.configuration.metrics && this.configuration.metrics.length > 0) {
      headers.push(<calcite-table-header 
        heading="Metric" 
        description={this.configuration.metrics[0]}
      ></calcite-table-header>)
    }

    rows.push(<calcite-table-row slot="table-header">{headers}</calcite-table-row>)
    for (const row of data?.data) {
      const cells = [
        <calcite-table-cell>{row['timestamp']}</calcite-table-cell>
      ]
      if (!!this.configuration.dimensions && this.configuration.dimensions.length > 0) {
        cells.push(<calcite-table-cell>{row[this.configuration.dimensions[0]]}</calcite-table-cell>)
      }
      if (!!this.configuration.metrics && this.configuration.metrics.length > 0) {
        cells.push(<calcite-table-cell>{row[this.configuration.metrics[0]]}</calcite-table-cell>)
      }
      rows.push(<calcite-table-row>{cells}</calcite-table-row>);
    }
    // <calcite-table-row>
    //     <calcite-table-cell>cell content</calcite-table-cell>
    //     <calcite-table-cell>cell content</calcite-table-cell>
    //     <calcite-table-cell>cell content</calcite-table-cell>
    //     <calcite-table-cell alignment="end">cell content</calcite-table-cell>
    // </calcite-table-row>

    return (
      <calcite-table caption="Simple table">
        {rows}
      </calcite-table>
    )

  }

}
