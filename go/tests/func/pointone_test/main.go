package main

import (
	student "student"

	"lib"
)

func PointOne(n *int) {
	*n = 1
}

func main() {
	n := 0
	student.PointOne(&n)
	if n != 1 {
		lib.Fatalf("PointOne(&n), n == %d instead of 1\n", n)
	}
}
