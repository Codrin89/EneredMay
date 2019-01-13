// Object of objects spliting
var z = {
	"7": {"id": 20},
	"something": {"ids": 400}
}

Object.values(z) => [
	{"id": 20},
	{"ids": 400}
];

Object.keys(z) => [
	"7",
	"something"
]