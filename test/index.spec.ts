import { assert, expect, should } from 'chai'

// import * as _     from 'lodash'
import * as chalk from 'chalk'

//==============================================================================

// Module to test
import * as unit from '../src/index'

//==============================================================================

describe(chalk.cyan('index:'), function()
{

	describe(`index.main:`, function ()
	{

		it('exists', function () {
			expect(unit).to.have.property('main')
		})

		it('is function', function () {
			assert.isFunction(unit.main)
			expect(unit).to.have.property('main')
		})

		it('returns undefined|void', function () {
			let value :void= unit.main()
			assert.isUndefined(value)
		})

	}) // END: describe

}) // END: describe

//==============================================================================
