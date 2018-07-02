/*
 * card grid props
 *
 *   layouts
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

export const margin = [10, 10];
export const containerPadding = [10, 10];
export const isDraggable = true;
export const isResizable = true;
export const draggableCancel = '.dy-card-head';
export const draggableHandle = '.ant-input';

export const breakpoints = { lg: 1200 };
export const cols = { lg: 3 };
export const rowHeight = 360;
