export
function main () :void
{
	console.log(`Hello World!`)
	return;
}

if (require.main === module) {
	main()
}
