import React, { PureComponent } from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events'
import TimeGridHeader from '../../src/TimeGridHeader'
import stickyfilljs from 'stickyfilljs'

class Sticky extends PureComponent {
  elementRef = React.createRef()

  render() {
    const { children } = this.props

    return (
      <div
        ref={this.elementRef}
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          borderBottom: '2px solid #DDD',
          marginBottom: '-2px',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    )
  }

  componentDidMount() {
    stickyfilljs.addOne(this.elementRef.current)
  }

  componentWillUnmount() {
    stickyfilljs.removeOne(this.elementRef.current)
  }
}

function StickyTimeGridHeader(props) {
  return (
    <Sticky>
      <TimeGridHeader {...props} isOverflowing={false} />
    </Sticky>
  )
}

const StickyExample = ({ localizer }) => (
  <BigCalendar
    events={events}
    defaultView="week"
    views={['day', 'work_week', 'week']}
    step={60}
    defaultDate={new Date(2015, 3, 1)}
    localizer={localizer}
    components={{
      timeGridHeader: StickyTimeGridHeader,
    }}
  />
)

export default StickyExample
