import BodyType from "../enums/BodyType.js";
import Circle from "./Circle.js";

export default class Bird extends Circle {
	static RADIUS = 20;

	/**
	 * A bird that will be launched at the pig fortress. The bird is a
	 * dynamic (i.e. non-static) Matter body meaning it is affected by
	 * the world's physics. We've given the bird a high restitution value
	 * so that it is bouncy. The label will help us manage this body later.
	 * The collision filter ensures that birds cannot collide with eachother.
	 * We've set the density to a value higher than the block's default density
	 * of 0.001 so that the bird can actually knock blocks over.
	 *
	 * https://brm.io/matter-js/docs/classes/Body.html#property_restitution
	 * https://brm.io/matter-js/docs/classes/Body.html#property_label
	 * https://brm.io/matter-js/docs/classes/Body.html#property_collisionFilter
	 * https://brm.io/matter-js/docs/classes/Body.html#property_density
	 *
	 * @param {number} x
	 * @param {number} y
	 */
	constructor(x, y) {
		super(x, y, Bird.RADIUS, 'red', {
			label: BodyType.Bird,
			density: 0.01,
			restitution: 0.8,
			collisionFilter: {
				group: -1,
			},
		});
	}
}
