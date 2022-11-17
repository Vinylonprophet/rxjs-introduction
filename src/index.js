/*
 * @Author: Vinylonprophet 915390118@qq.com
 * @Date: 2022-11-17 14:58:05
 * @LastEditors: Vinylonprophet 915390118@qq.com
 * @LastEditTime: 2022-11-17 15:33:55
 * @FilePath: \rxjs-introduction\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 基本使用
// import './rxjs/chapter1.ts';

// next，complete，error
// import './rxjs/chapter2.ts';

// Subject，创建空的可观察对象
// import './rxjs/chapter3.ts';

// BehaviorSubject，拥有Subject的全部功能，但是创建Observable时可以传入默认值，订阅直接拿到默认值
// import './rxjs/chapter4.ts';

// ReplaySubject，会对广播者广播所有历史结果
// import './rxjs/chapter5.ts';

// 数据流、操作符
// 可观察对象内部输出的数据就是数据流
// 用于操作数据流，对数据流进行转换，过滤等等操作的就是操作符
// range，map
// import './rxjs/chapter6.ts';

// from，将Array，Promise，Iterator（迭代器）转换为Observable对象
// import './rxjs/chapter7.ts';

// forkJoin是Rx版本的promise.all()，表示等到所有的Observable都完成之后，才一次性返回值
// import './rxjs/chapter8.ts';

// 辅助方法fromEvent
// 操作符pluck，获取数据流对象中的属性值
import './rxjs/chapter9.js'
