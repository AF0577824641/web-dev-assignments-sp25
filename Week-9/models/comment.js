const comments = [
    {
        id: "0",
        bookId: "0",
        userEmail: "rvanmech@pratt.edu",
        userName: "R Van Mech",
        text: "I would love to read this!!"
    },
    {
        id: "1",
        bookId: "0",
        userEmail: "rvanmech@pratt.edu",
        userName: "R Van Mech",
        text: "OMG is just so good, i hope it stays this way"
    },
    {
        id: "2",
        bookId: "0",
        userEmail: "rvanmech@pratt.edu",
        userName: "R Van Mech",
        text: "Its so sad that i finished it, what do you think?"
    }
];

function getNextId() {
    return Math.max(...comments.map(c => parseInt(c.id))) + 1;
}

const CommentModel = {
    add: (comment) => {
        comment.id = getNextId().toString();
        comments.push(comment);
        return comment;
    },

    update: (comment) => {
        const index = comments.findIndex(c => c.id === comment.id);
        if (index !== -1) {
            comments[index] = comment;
        }
        return comment;
    },

    upsert: (comment) => {
        if (comment.id) {
            return CommentModel.update(comment);
        } else {
            return CommentModel.add(comment);
        }
    },

    get: (id) => {
        return comments.find(comment => comment.id === id);
    },

    getAllForBook: (bookId) => {
        return comments.filter(comment => comment.bookId === bookId);
    },

    all: () => {
        return comments;
    }
};

module.exports = CommentModel;
