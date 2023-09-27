   toast({
          colorScheme: "teal",

          position: "top",
          title: "Yay!",
          description: "Account created!",
          status: "success",
          duration: 4500,
          isClosable: true,
        });

        toast({
          position: "top",
          title: "Uh-oh!",
          description: `${error.message}`,
          status: "error",
          duration: 4500,
          isClosable: true,
        });