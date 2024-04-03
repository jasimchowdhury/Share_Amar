interface UserDocument {
    name: string;
    title: string;
    type: string;
    fields: UserField[];
}

interface UserField {
    name: string;
    title: string;
    type: string;
}

export const userDocument: UserDocument = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName', 
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
        },
    ]
};

//export default userDocument;
