import { SparklineComponent,Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts'
import React from 'react'

const SparkLineChart = (props) => {
  return (
    <SparklineComponent
    id={props.id}
    height={props.height}
    width={props.width}
    lineWidth={1}
    valueType='Numeric'
    fill={props.color}
    border={{color:props.currentColor,width:2}}
    dataSource={props.data}
    xName='x'
    yName='yval'
    type={props.type}
    tooltipSettings={{
      visible: true,
      // eslint-disable-next-line no-template-curly-in-string
      format: '${x} : data ${yval}',
      trackLineSettings: {
        visible: true,
      },
    }}

    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLineChart
