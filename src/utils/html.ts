/* eslint-disable no-sequences */

const templateRange = new Range()
const cloneRange = new Range()

/** Returns a DocumentFragment representing the given HTML markup. */
export const html = templateRange.createContextualFragment.bind(templateRange) as (fragment: string) => DocumentFragment

/** Returns a Node representing the first contents of the given HTML markup. */
export const h = <T = HTMLElement>(fragment: string) => html(fragment).firstChild as T

export const c = <T = HTMLElement>(container: T, ...nodes: (Node | string)[]) => (
	(container as ParentNode).replaceChildren(...nodes),
	container
)

export const cloneContents = (target: Node) => (
	cloneRange.selectNodeContents(target),
	cloneRange.cloneContents()
)

templateRange.selectNodeContents(document.createElement('template'))

/** Returns a number representing the maximum left scroll offset possible for the element. */
export const getScrollLeftMax = (target: Element) => target.scrollWidth - target.clientWidth
