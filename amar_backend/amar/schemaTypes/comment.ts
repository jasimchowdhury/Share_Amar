interface CommentDocument {
    name: string;
    title: string;
    type: string;
    fields: CommentField[];
}

interface CommentField {
    name: string;
    title: string;
    type: string;
}

export const commentDocument: CommentDocument = {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'string',
        },
    ]
};

//export default commentDocument;
