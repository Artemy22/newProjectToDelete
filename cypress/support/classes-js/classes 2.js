
class Comment {
    constructor(text) {
        this.text = text;
        this.likeCount = 0;
    }

    addLike() {         // method  "addLike"
        this.likeCount += 1;
    }

    static mergeComments(firstComment, secondComment){
        return `first comment: ${firstComment}\nsecond comment: ${secondComment}`
    }
}

const comment1 = new Comment('it is a first comment')
const comment2 = new Comment('it is a second comment')

let mergedText = Comment.mergeComments(comment1.text, comment2.text)
console.log(mergedText)


comment1.addLike();
console.log(comment1.likeCount)
