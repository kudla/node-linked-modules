import it from 'ava'
import { isModuleScope } from './isModuleScope'

it('should be a function', t => {
	t.is(typeof isModuleScope, 'function')
})

it('should be positive for strings started with @', t => {
	t.is(isModuleScope('@scope'), true)
})

it('should be negative for strings not started but containing @', t => {
	t.is(isModuleScope('some@scope'), false)
})

it('should be negative for strings without @', t => {
	t.is(isModuleScope('some-scope'), false)
})

it('should be negative for empty strings', t => {
	t.is(isModuleScope(''), false)
})