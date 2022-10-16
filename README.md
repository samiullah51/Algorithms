# Algorithms

I am going through some algorithms and data structures to find fast and accurate solutions for some problems. I will foucs on time and space complexity as well and I will
make it sure to cover different concepts.

# Topics

## Big O

Programmers use Big O notation for analyzing the time and space complexities of an algorithm. This notation measures the upper bound performance of any algorithm.

While creating code, what algorithm and data structure you choose matter a lot. Big O notation helps you compare the performance of various algorithms and find the right one for your type of code.

Today, in the modern world of complex applications and software, it is necessary to perform well in a different environment. For this, you need to optimize your code without any lag while executing the underlying code. Whenever you get the result of the Big O notation, you will be able to check if you have a lower running time than your competitors.

Thus, it has become necessary for programmers to check their code and analyze it thoroughly. This Big O Notation cheat sheet (time complexity cheat sheet or data structure cheat sheet) will help you understand various complexities.
<img src="https://he-s3.s3.amazonaws.com/media/uploads/ece920b.png" width="100%" height="500">

## Objects

    Objects are unordered data structures and everything is stored in key value pairs. It is used when we don't need orders or we need fast access, insertion or removal.

### Big O of Objects

    Object is an excellent choice when we don't need order. The big O for objects are:
    O(1) -- for insertion
    O(1) -- for deletion
    O(1) -- for access
    O(N) -- for searching

It means that insertion, deletion and accessing is constant while searching is depend upon the number of key value pairs in object means that it is linear time.
<img src="https://paper-attachments.dropbox.com/s_D8321C80F6574B261A5AA02D2476A50C8DDF61A6CC2583DCEE0E18EC365EF07B_1658417045591_Untitled+Diagram.jpg" width="100%" height="500">

## Arrays

    Arrays are in ordered form. We use arrays when we need data in orders. But sometime we face some issues and problems while we perform some operations on arrays.

### Big O of Arrays

    depends -- insertion
    depends -- removal
    O(N)    -- searching
    O(1)    -- accessing

### Big O of Array Methods

    O(1) -- push()
    O(1) -- pop()
    O(n) -- shift()
    O(n) -- unshift()
    O(n) -- concat()
    O(n) -- slice()
    O(n) -- splice()
    O(n * log n) -- sort()
    O(n) -- forEach()/map()/filter()/reduce()

<img src="https://miro.medium.com/max/1400/1*U1kFNbJBhpLakBk2urn7nw.png" width="50%" height="50%">
