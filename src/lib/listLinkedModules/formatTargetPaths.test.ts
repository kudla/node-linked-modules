import it from 'ava'
import { formatTargetPaths } from './formatTargetPaths'

it('should be a function', t => {
	t.is(typeof formatTargetPaths, 'function')
})

it('should map paths with template', t => {
	const result = formatTargetPaths(['a', 'b', 'c'], 'template', ' ')
	t.deepEqual(result, 'template template template')
})

it('should interpolate paths into placeholder', t => {
	const result = formatTargetPaths(['a', 'b', 'c'], 'any-{}-thing', ' ')
	t.deepEqual(result, 'any-a-thing any-b-thing any-c-thing')
})

it('should join result with delimiter', t => {
	const result = formatTargetPaths(['a', 'b', 'c'], '{}', ':')
	t.deepEqual(result, 'a:b:c')
})
