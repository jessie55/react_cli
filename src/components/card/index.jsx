/*
 * card 拖动，缩放
 *
 * @props
 *   draggableCancel   string             禁止拖动元素选择器，如draggableCancel:'.MyNonDraggableAreaClassName'
 *   draggableHandle   string             处理拖动元素选择器
 *   margin            [number, number]   item与item之间的margin
 *   containerPadding  [number, number]   外部容器的padding
 *   rowHeight         number             行高（最小行高）可在breakpoints中调整
 *   isDraggable       boolean            是否可拖动
 *   isResizable       boolean            是否调整大小
 *
 *   onLayoutChange    func               layout改变时触发callback，返回参数layout
 *   onDragStart       func
 *   onDrag            func
 *   onDragStop        func
 *   onResizeStart     func
 *   onResize          func
 *   onResizeStop      func
 *   callback: (layout: Layout, oldItem: LayoutItem, newItem: LayoutItem, placeholder: LayoutItem, e: MouseEvent, element: HTMLElement)
 *
 */

import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import CardItem from './item';
import './card.scss';

const ResponsiveGridLayout = WidthProvider(Responsive);


class Card extends React.Component {
  static defaultProps = {
    margin: [15, 15],
    containerPadding: [15, 15]
  }

  renderElement = (el, index) => {
    console.log(el.props);

    return (
      <CardItem
        key={index}
        grid={el}
      >
        { el }
      </CardItem>
    );
  }

  render() {
    // console.log(this.props.children);

    return (
      <ResponsiveGridLayout
        className="layout"
        draggableCancel={this.props.draggableCancel}
        draggableHandle={this.props.draggableHandle}
        margin={this.props.margin}
        containerPadding={this.props.containerPadding}
        rowHeight={this.props.rowHeight}
        isDraggable={this.props.isDraggable}
        isResizable={this.props.isResizable}
        onLayoutChange={this.props.onLayoutChange}
      >
        { this.props.children.map((el, index) => this.renderElement(el, index)) }
      </ResponsiveGridLayout>
    );
  }
}

export default Card;
