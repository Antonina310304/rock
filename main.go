package main

import (
	"fmt"
	"time"
)

func main() {
LOOP:
	fmt.Println("I'm live")
	time.Sleep(5 * time.Second)
	goto LOOP
}
