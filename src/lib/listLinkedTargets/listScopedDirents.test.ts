import it from 'ava'
import { listScopedDirents } from './listScopedDirents'
import { Dirent } from 'fs'

it('should be a function', t => {
	t.is(typeof listScopedDirents, 'function')
})

const MockDirent = (name: string, isDir: boolean) => {
	const dirent = new Dirent()
	dirent.name = name
	dirent.isDirectory = () => isDir
	return dirent
}

it('should accept scoped directories', t => {
	const result = listScopedDirents(
		[
			MockDirent('@a', true),
		],
		'parent'
	)
	t.deepEqual(result, ['parent/@a'])
})

it('should not accept scoped like files', t => {
	const result = listScopedDirents(
		[
			MockDirent('@a', false),
		],
		'parent'
	)
	t.deepEqual(result, [])
})

it('should not accept non scoped directories', t => {
	const result = listScopedDirents(
		[
			MockDirent('a', true),
		],
		'parent'
	)
	t.deepEqual(result, [])
})
