import it from 'ava'
import { listLinkedDirentPlains } from './listLinkedDirentPlains'
import { Dirent } from 'fs'

it('should be a function', t => {
	t.is(typeof listLinkedDirentPlains, 'function')
})

const MockDirent = (name: string, isLink: boolean) => {
	const dirent = new Dirent()
	dirent.name = name
	dirent.isSymbolicLink = () => isLink
	return dirent
}
const realPath = (path: string) => `->${path}`

it('should accept symlinks', t => {
	const result = listLinkedDirentPlains(
		[
			MockDirent('a', true),
		],
		'parent',
		realPath
	)
	t.deepEqual(result, ['->parent/a'])
})

it('should reject non symlinks', t => {
	const result = listLinkedDirentPlains(
		[
			MockDirent('a', false),
		],
		'parent',
		realPath
	)
	t.deepEqual(result, [])
})
