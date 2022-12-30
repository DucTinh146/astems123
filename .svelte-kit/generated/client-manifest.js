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
	() => import('./nodes/11')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [3],
	"/cart": [4],
	"/contact": [5],
	"/login": [6],
	"/product": [7],
	"/shop": [8],
	"/signup": [9],
	"/sverdle": [~10],
	"/sverdle/how-to-play": [11]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};