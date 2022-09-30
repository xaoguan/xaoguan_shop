/* 
    使用 Mockjs 提供的mock数据接口

*/

import Mock from 'mockjs';

import data from './data.json'

// 返回 goods 的 接口
Mock.mock('/goods', {code: 0, data: data.goods});
// 返回 ratings 的 接口

Mock.mock('/ratings', {code: 0, data: data.ratings});

// 返回 info 的 接口
Mock.mock('/info', {code: 0, data: data.info});

// mock不需要向外暴露任何数据, 只需要保证能执行即可