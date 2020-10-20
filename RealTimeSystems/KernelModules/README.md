## Kernel Modules
Kernel modules are pieces of code that can be loaded and unloaded into the kernel upon demand. They extend the functionality of the kernel without the need to reboot the system.

### Kernel commands
  - insert a module: `insmod ./myModule.ko`
  - remove a module: `rmmod myModule`
  - show currently loaded modules: `lsmod`
  - show information of a module: `modinfo`

### Example
```C
#include <linux/module.h>
#include <linux/kernel.h>

///init_module(): Invoked by insmodto prepare for later invocation of module's functions. It can be used to allocate required system resources, declare and start tasks etc.
int init_module(void){
  printk(KERN_INFO "Hello World\n");
  return 0;
}

///cleanup_module(): Invoked by rmmodto inform kernel that the module's functions will not be called any more. A good place to release all of the system resources allocated during the lifetime of the module, stop and delete tasks etc.
void cleanup_module(void){
  printk(KERN_INFO "Goodbye!\n");
}
```

### Kernel Module Makefile
```makefile
obj-m += hello.o

all:
  make -C /lib/modules/$(shell uname -r)/build M=$(PWD) [modules]
  
clean:
  make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
```  
### Macros
In the current versions of Linux (2.4 onwards) it is possible to use any suitable name for the initand cleanup functions.In order to do that one has to begin the name of functions with `__init` and `__exit` macros, then use `module_init()` and `module_exit()` macros after defining these functions.
```C
#include <linux/module.h> /*Every module requires it*/
#include <linux/kernel.h>/*KERN_INFO needs it*/
#include <linux/init.h>/* Required by macros*

#define DRIVER_AUTHOR "Sida Wang"
#define DRIVER_DESC "Written by me"

static char *my_string__initdata= "dummy";
static intmy_int__initdata= 4;

/* Initfunction with user defined name*/
static int __init hello_4_init(void){
  printk(KERN_INFO "Hello %s world, number %d\n",my_string, my_int);
  return 0;
}

/* Exit function with user defined name*/
static void __exit hello_4_exit(void){
  printk(KERN_INFO "Goodbye cruel world 4\n");
}

// Task specific functions go here.
/*Macros to be used after defining init and exit functions*/
module_init(hello_4_init);
module_exit(hello_4_exit);

MODULE_LICENSE("GPL"); /* Avoids kernel taint message*/
MODULE_AUTHOR(DRIVER_AUTHOR); /* Who wrote this module? */
MODULE_DESCRIPTION(DRIVER_DESC); /* What does this module */

```
