## Kernel Modules

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
