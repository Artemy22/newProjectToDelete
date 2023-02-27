
class Comment {
    constructor(text) {
        this.text = text;
        this.likeCount = 0;
    }

    addLike() {         // method  "addLike"
        this.likeCount += 1;
    }

}

const comment1 = new Comment('This is a first comment')
// console.log(comment1)
// console.log(comment1.likeCount)


comment1.addLike()
// console.log(comment1)
// console.log(comment1.likeCount)

const comment2 = new Comment('This is a second comment')
const comment3 = new Comment('This is a third comment')

console.log(comment1)
console.log(comment2)
console.log(comment3)
