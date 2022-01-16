# todo-list

[Live Demo](https://laur-ns.github.io/todo-list/dist)

## SOLID PRINCIPLE NOTES

### Single Responsibility Principle

A module should have only one reason to change. E.g. a class shouldn't contain a method to console.log and another method to add to an array. The console.log should be kept in a different module/class/etc in case we want to change the logger to append to the dom instead of just logging to console.

### Open/Closed Principle

Open to extension but closed for modification. A well written class shouldn't have to be rewritten to integrate a new feature. When designing a class I should anticipate any extensions that might be made in the future. E.g. a class that converts decimal to binary, might want to convert other bases in the future, so instead a new class called NumberConverter is used that takes three arguments - the number, fromBase, and toBase, then converts accordingly. This means we can add additional number systems without ever modifying NumberConverter.

### Liskov Substitution Principle

Derived classes must be substitutable for their base classes. E.g. methods of a subclass that overrides the methods of the superclass must have the same number of arguments. Each argument should also be the same type as the superclass', and the return type should be the same also. The types of errors from the overridden methods must also be the same as the methods of the superclass.

### Interface Segregation Principle

No client should be forced to depend on methods it does not use. Methods of a large interface can be broken up into groups of methods... (Interfaces in general is an abstract class that defines properties and methods of a class - it contains no data)... E.g. if you create a class that is implemented from an interface, if that class doesn't require a method from that interface, the ISP has been violated. A good way to solve this is to use composition instead of inheritance.

### Dependency Inversion Principle

Source code dependencies should refer to abstractions, not to concretions. IRL example - a remote relies on batteries but it's not restricted to a specific battery brand. Switch to another brand and it will still work.


Loosely coupled objects don't rely so heavily on each other that modifying one will break another. 