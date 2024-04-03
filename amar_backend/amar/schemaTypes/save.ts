interface SaveDocument {
    name: string;
    title: string;
    type: string;
    fields: SaveField[];
}

interface SaveField {
    name: string;
    title: string;
    type: string;
}

export const saveDocument: SaveDocument = {
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
    ]
};

//export default saveDocument;
