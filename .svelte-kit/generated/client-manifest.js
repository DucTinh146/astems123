export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [3],
	"/add": [4],
	"/cart": [5],
	"/contact": [6],
	"/login": [7],
	"/newyear": [8],
	"/product": [9],
	"/shop": [10],
	"/signup": [11],
	"/sverdle": [~12],
	"/sverdle/how-to-play": [13]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};