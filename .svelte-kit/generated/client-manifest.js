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
	() => import('./nodes/12')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [3],
	"/cart": [4],
	"/contact": [5],
	"/login": [6],
	"/newyear": [7],
	"/product": [8],
	"/shop": [9],
	"/signup": [10],
	"/sverdle": [~11],
	"/sverdle/how-to-play": [12]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};