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
          
          {/* {this.renderChart(this.data)} */}

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
      for(const header of this.configuration.dimensions) {
        headers.push(<calcite-table-header 
          heading="Dimension"
          description={header}
        ></calcite-table-header>)
      }
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
    
      for(const dimension of this.configuration.dimensions) {
        cells.push(<calcite-table-cell>{row[dimension]}</calcite-table-cell>)
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

  renderChart(data) {
    const specification = {
      "version": "9.7.0",
      "type": "chart",
      "id": "line-chart-5",
      "colorMatch": true,
      "rotated": false,
      "title": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [
            0,
            0,
            0,
            178.5
          ],
          "text": "Sum of Beat by Community by Primary Type",
          "font": {
            "family": "Arial, Helvetica, sans-serif",
            "size": 18,
            "style": "normal",
            "weight": "normal",
            "decoration": "none"
          },
          "horizontalAlignment": "center"
        }
      },
      "subTitle": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [
            0,
            0,
            0,
            178.5
          ],
          "text": "",
          "font": {
            "family": "Arial, Helvetica, sans-serif",
            "size": 10,
            "style": "normal",
            "weight": "normal",
            "decoration": "none"
          },
          "horizontalAlignment": "center"
        }
      },
      "footer": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [
            0,
            0,
            0,
            178.5
          ],
          "text": "",
          "font": {
            "family": "Arial, Helvetica, sans-serif",
            "size": 11,
            "style": "normal",
            "weight": "normal",
            "decoration": "none"
          },
          "horizontalAlignment": "center"
        }
      },
      "background": [
        255,
        255,
        255,
        255
      ],
      "axes": [
        {
          "type": "chartAxis",
          "visible": true,
          "title": {
            "type": "chartText",
            "visible": true,
            "content": {
              "type": "esriTS",
              "color": [
                0,
                0,
                0,
                178.5
              ],
              "text": "Community",
              "font": {
                "family": "Arial, Helvetica, sans-serif",
                "size": 14,
                "style": "normal",
                "weight": "normal",
                "decoration": "none"
              },
              "horizontalAlignment": "center",
              "verticalAlignment": "middle"
            }
          },
          "labels": {
            "type": "chartText",
            "visible": true,
            "content": {
              "type": "esriTS",
              "color": [
                0,
                0,
                0,
                178.5
              ],
              "text": "X Axis",
              "font": {
                "family": "Arial, Helvetica, sans-serif",
                "size": 10,
                "style": "normal",
                "weight": "normal",
                "decoration": "none"
              },
              "horizontalAlignment": "center"
            }
          },
          "valueFormat": {
            "type": "number",
            "intlOptions": {
              "style": "decimal",
              "minimumFractionDigits": 0,
              "maximumFractionDigits": 3
            }
          },
          "lineSymbol": {
            "type": "esriSLS",
            "style": "esriSLSSolid",
            "color": [
              156,
              156,
              156,
              255
            ],
            "width": 1
          },
          "integerOnlyValues": true,
          "minimum": null,
          "maximum": null
        },
        {
          "type": "chartAxis",
          "visible": true,
          "title": {
            "type": "chartText",
            "visible": true,
            "content": {
              "type": "esriTS",
              "color": [
                0,
                0,
                0,
                178.5
              ],
              "text": "Sum of Beat",
              "font": {
                "family": "Arial, Helvetica, sans-serif",
                "size": 14,
                "style": "normal",
                "weight": "normal",
                "decoration": "none"
              },
              "horizontalAlignment": "center",
              "verticalAlignment": "middle"
            }
          },
          "labels": {
            "type": "chartText",
            "visible": true,
            "content": {
              "type": "esriTS",
              "color": [
                0,
                0,
                0,
                178.5
              ],
              "text": "Count",
              "font": {
                "family": "Arial, Helvetica, sans-serif",
                "size": 10,
                "style": "normal",
                "weight": "normal",
                "decoration": "none"
              },
              "horizontalAlignment": "center"
            }
          },
          "valueFormat": {
            "type": "number",
            "intlOptions": {
              "style": "decimal",
              "minimumFractionDigits": 0,
              "maximumFractionDigits": 3
            }
          },
          "lineSymbol": {
            "type": "esriSLS",
            "style": "esriSLSSolid",
            "color": [
              156,
              156,
              156,
              255
            ],
            "width": 1
          },
          "grid": {
            "type": "esriSLS",
            "style": "esriSLSSolid",
            "color": [
              0,
              0,
              0,
              25
            ],
            "width": 1
          },
          "integerOnlyValues": false,
          "minimum": null,
          "maximum": null,
          "guides": [
            {
              "type": "chartGuide",
              "name": "Guide",
              "start": "4000",
              "style": {
                "type": "esriSFS",
                "color": [
                  230,
                  230,
                  230,
                  153
                ],
                "outline": {
                  "type": "esriSLS",
                  "style": "esriSLSSolid",
                  "color": [
                    0,
                    0,
                    0,
                    0
                  ],
                  "width": 1
                }
              },
              "end": "6000",
              "label": {
                "type": "esriTS",
                "color": [
                  0,
                  0,
                  0,
                  178.5
                ],
                "text": "Between 4000 to 6000",
                "font": {
                  "family": "Arial, Helvetica, sans-serif",
                  "size": 10,
                  "style": "normal",
                  "weight": "normal",
                  "decoration": "none"
                }
              },
              "above": false
            }
          ]
        }
      ],
      "series": [
        {
          "type": "lineSeries",
          "id": "ASSAULT",
          "name": "ASSAULT",
          "query": {
            "orderByFields": [
              "Community ASC"
            ],
            "groupByFieldsForStatistics": [
              "Community"
            ],
            "outStatistics": [
              {
                "statisticType": "sum",
                "onStatisticField": "Beat",
                "outStatisticFieldName": "SUM_BEAT_0"
              }
            ],
            "where": "Primary_Ty='ASSAULT'"
          },
          "x": "Community",
          "y": "SUM_BEAT_0",
          "lineSymbol": {
            "type": "esriSLS",
            "style": "esriSLSSolid",
            "color": [
              178,
              224,
              97,
              178.5
            ],
            "width": 2
          },
          "markerSymbol": {
            "type": "esriSMS",
            "style": "esriSMSCircle",
            "color": [
              178,
              224,
              97,
              178.5
            ],
            "size": 4
          },
          "dataLabels": {
            "type": "chartText",
            "visible": false,
            "content": {
              "type": "esriTS",
              "color": [
                0,
                0,
                0,
                178.5
              ],
              "text": "",
              "font": {
                "family": "Arial, Helvetica, sans-serif",
                "size": 10,
                "style": "normal",
                "weight": "normal",
                "decoration": "none"
              },
              "horizontalAlignment": "center"
            }
          },
          "timeIntervalSize": 0,
          "timeIntervalUnits": "esriTimeUnitsMonths",
          "timeAggregationType": "equalIntervalsFromStartTime",
          "trimIncompleteTimeInterval": true,
          "nullPolicy": "interpolate",
          "rotated": false
        },
        {
          "type": "lineSeries",
          "id": "BATTERY",
          "name": "BATTERY",
          "query": {
            "orderByFields": [
              "Community ASC"
            ],
            "groupByFieldsForStatistics": [
              "Community"
            ],
            "outStatistics": [
              {
                "statisticType": "sum",
                "onStatisticField": "Beat",
                "outStatisticFieldName": "SUM_BEAT_1"
              }
            ],
            "where": "Primary_Ty='BATTERY'"
          },
          "x": "Community",
          "y": "SUM_BEAT_1",
          "lineSymbol": {
            "type": "esriSLS",
            "style": "esriSLSSolid",
            "color": [
              126,
              176,
              213,
              178.5
            ],
            "width": 2
          },
          "markerSymbol": {
            "type": "esriSMS",
            "style": "esriSMSCircle",
            "color": [
              126,
              176,
              213,
              178.5
            ],
            "size": 4
          },
          "dataLabels": {
            "type": "chartText",
            "visible": false,
            "content": {
              "type": "esriTS",
              "color": [
                0,
                0,
                0,
                178.5
              ],
              "text": "",
              "font": {
                "family": "Arial, Helvetica, sans-serif",
                "size": 10,
                "style": "normal",
                "weight": "normal",
                "decoration": "none"
              },
              "horizontalAlignment": "center"
            }
          },
          "timeIntervalSize": 0,
          "timeIntervalUnits": "esriTimeUnitsMonths",
          "timeAggregationType": "equalIntervalsFromStartTime",
          "trimIncompleteTimeInterval": true,
          "nullPolicy": "interpolate",
          "rotated": false
        },
        {
          "type": "lineSeries",
          "id": "ROBBERY",
          "name": "ROBBERY",
          "query": {
            "orderByFields": [
              "Community ASC"
            ],
            "groupByFieldsForStatistics": [
              "Community"
            ],
            "outStatistics": [
              {
                "statisticType": "sum",
                "onStatisticField": "Beat",
                "outStatisticFieldName": "SUM_BEAT_2"
              }
            ],
            "where": "Primary_Ty='ROBBERY'"
          },
          "x": "Community",
          "y": "SUM_BEAT_2",
          "lineSymbol": {
            "type": "esriSLS",
            "style": "esriSLSSolid",
            "color": [
              253,
              127,
              111,
              178.5
            ],
            "width": 2
          },
          "markerSymbol": {
            "type": "esriSMS",
            "style": "esriSMSCircle",
            "color": [
              253,
              127,
              111,
              178.5
            ],
            "size": 4
          },
          "dataLabels": {
            "type": "chartText",
            "visible": false,
            "content": {
              "type": "esriTS",
              "color": [
                0,
                0,
                0,
                178.5
              ],
              "text": "",
              "font": {
                "family": "Arial, Helvetica, sans-serif",
                "size": 10,
                "style": "normal",
                "weight": "normal",
                "decoration": "none"
              },
              "horizontalAlignment": "center"
            }
          },
          "timeIntervalSize": 0,
          "timeIntervalUnits": "esriTimeUnitsMonths",
          "timeAggregationType": "equalIntervalsFromStartTime",
          "trimIncompleteTimeInterval": true,
          "nullPolicy": "interpolate",
          "rotated": false
        }
      ],
      "legend": {
        "type": "chartLegend",
        "visible": true,
        "title": {
          "type": "chartText",
          "visible": true,
          "content": {
            "type": "esriTS",
            "color": [
              0,
              0,
              0,
              178.5
            ],
            "text": "Primary Type",
            "font": {
              "family": "Arial, Helvetica, sans-serif",
              "size": 13,
              "style": "normal",
              "weight": "normal",
              "decoration": "none"
            },
            "horizontalAlignment": "center"
          }
        },
        "body": {
          "type": "esriTS",
          "color": [
            0,
            0,
            0,
            178.5
          ],
          "text": "",
          "font": {
            "family": "Arial, Helvetica, sans-serif",
            "size": 12,
            "style": "normal",
            "weight": "normal",
            "decoration": "none"
          },
          "horizontalAlignment": "center"
        },
        "position": "bottom",
        "maxHeight": null
      },
      "dataSource": {
        "type": "layer",
        "layer": {
          "id": "",
          "layerType": "ArcGISFeatureLayer",
          "url": "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/ChicagoCr/FeatureServer",
          "layerDefinition": {
            "drawingInfo": {
              "renderer": {
                "type": "uniqueValue",
                "visualVariables": [
                  {
                    "type": "sizeInfo",
                    "valueExpression": "$view.scale",
                    "stops": [
                      {
                        "size": 7.5,
                        "value": 4513.988705
                      },
                      {
                        "size": 6,
                        "value": 36111.909643
                      },
                      {
                        "size": 3,
                        "value": 288895.277144
                      },
                      {
                        "size": 1.5,
                        "value": 2311162.217155
                      }
                    ]
                  }
                ],
                "field1": "Primary_Ty",
                "legendOptions": {},
                "uniqueValueGroups": [
                  {
                    "classes": [
                      {
                        "label": "Robbery (custom)",
                        "symbol": {
                          "type": "esriSMS",
                          "color": [
                            253,
                            127,
                            111,
                            255
                          ],
                          "angle": 0,
                          "xoffset": 0,
                          "yoffset": 0,
                          "size": 6,
                          "style": "esriSMSCircle",
                          "outline": {
                            "type": "esriSLS",
                            "color": [
                              26,
                              26,
                              26,
                              64
                            ],
                            "width": 0.75,
                            "style": "esriSLSSolid"
                          }
                        },
                        "values": [
                          [
                            "ROBBERY"
                          ]
                        ]
                      },
                      {
                        "label": "BATTERY",
                        "symbol": {
                          "type": "esriSMS",
                          "color": [
                            126,
                            176,
                            213,
                            255
                          ],
                          "angle": 0,
                          "xoffset": 0,
                          "yoffset": 0,
                          "size": 6,
                          "style": "esriSMSCircle",
                          "outline": {
                            "type": "esriSLS",
                            "color": [
                              26,
                              26,
                              26,
                              64
                            ],
                            "width": 0.75,
                            "style": "esriSLSSolid"
                          }
                        },
                        "values": [
                          [
                            "BATTERY"
                          ]
                        ]
                      },
                      {
                        "label": "Assault (custom)",
                        "symbol": {
                          "type": "esriSMS",
                          "color": [
                            178,
                            224,
                            97,
                            255
                          ],
                          "angle": 0,
                          "xoffset": 0,
                          "yoffset": 0,
                          "size": 6,
                          "style": "esriSMSCircle",
                          "outline": {
                            "type": "esriSLS",
                            "color": [
                              26,
                              26,
                              26,
                              64
                            ],
                            "width": 0.75,
                            "style": "esriSLSSolid"
                          }
                        },
                        "values": [
                          [
                            "ASSAULT"
                          ]
                        ]
                      }
                    ]
                  }
                ],
                "uniqueValueInfos": [
                  {
                    "label": "Robbery (custom)",
                    "symbol": {
                      "type": "esriSMS",
                      "color": [
                        253,
                        127,
                        111,
                        255
                      ],
                      "angle": 0,
                      "xoffset": 0,
                      "yoffset": 0,
                      "size": 6,
                      "style": "esriSMSCircle",
                      "outline": {
                        "type": "esriSLS",
                        "color": [
                          26,
                          26,
                          26,
                          64
                        ],
                        "width": 0.75,
                        "style": "esriSLSSolid"
                      }
                    },
                    "value": "ROBBERY"
                  },
                  {
                    "label": "BATTERY",
                    "symbol": {
                      "type": "esriSMS",
                      "color": [
                        126,
                        176,
                        213,
                        255
                      ],
                      "angle": 0,
                      "xoffset": 0,
                      "yoffset": 0,
                      "size": 6,
                      "style": "esriSMSCircle",
                      "outline": {
                        "type": "esriSLS",
                        "color": [
                          26,
                          26,
                          26,
                          64
                        ],
                        "width": 0.75,
                        "style": "esriSLSSolid"
                      }
                    },
                    "value": "BATTERY"
                  },
                  {
                    "label": "Assault (custom)",
                    "symbol": {
                      "type": "esriSMS",
                      "color": [
                        178,
                        224,
                        97,
                        255
                      ],
                      "angle": 0,
                      "xoffset": 0,
                      "yoffset": 0,
                      "size": 6,
                      "style": "esriSMSCircle",
                      "outline": {
                        "type": "esriSLS",
                        "color": [
                          26,
                          26,
                          26,
                          64
                        ],
                        "width": 0.75,
                        "style": "esriSLSSolid"
                      }
                    },
                    "value": "ASSAULT"
                  }
                ]
              }
            }
          }
        }
      }
    }

    return (<arcgis-charts-line-chart class="chart"
      config={specification}
    >
      <arcgis-charts-action-bar slot="action-bar"></arcgis-charts-action-bar>
    </arcgis-charts-line-chart>)
  }

}
