export type NavItem = {
	name: string;
	href: string;
};

export const navigation: NavItem[] = [
	{ name: 'Articles', href: '/articles' },
	{ name: 'Notes', href: '/notes' },
	{ name: 'Finds', href: '/finds' },
	{ name: 'Uses', href: '/uses' },
	{ name: 'Contact', href: '/contact' }
];
