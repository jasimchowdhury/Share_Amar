interface PostedByDocument {
    name: string;
    title: string;
    type: string;
    to: { type: string }[];
}

export const postedByDocument: PostedByDocument = {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{ type: 'user' }]
};

//export default postedByDocument;
