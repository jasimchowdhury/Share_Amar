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

// export default {
// name: 'comment',
// title: 'Comment',
// type: 'document',
// fields:[
// {
// name: 'postedBy',
// title: 'PostedBy',
// type: 'postedBy',
// },
// {
// name: 'comment',
// title: 'Comment',
// type: 'string',
// },
// ]
// }
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

// export default {
// name: 'pin',
// title: 'Pin',
// type: 'document',
// fields:[
// {
// name: 'title',
// title: 'Title',
// type: 'string',
// },
// {
// name: 'about',
// title: 'About',
// type: 'string',
// },
// {
// name: 'destination',
// title: 'Destination',
// type: 'url',
// },
// {
// name: 'category',
// title: 'Category',
// type: 'string',
// },
// {
// name: 'image',
// title: 'Image',
// type: 'image',
// option: {
// hotspot: true
// }
// },
// {
// name: 'userId',
// title: 'UserId',
// type: 'string',
// },
// {
// name: 'postedBy',
// title: 'PostedBy',
// type: 'postedBy',
// },
// {
// name: 'save',
// title: 'save',
// type: 'array',
// of: [{type: 'save'}]
// },
// {
// name: 'comments',
// title: 'Comments',
// type: 'array',
// of: [{type:'comment'}]
// },
// ]
// }
interface PinDocument {
name: string;
title: string;
type: string;
fields: PinField[];
}

interface PinField {
name: string;
title: string;
type: string;
options?: {
hotspot?: boolean;
};
of?: {
type: string;
}[];
}

// export default {
// name: 'postedBy',
// title: 'PostedBy',
// type: 'reference',
// to: [{type:'user'}]

// }
interface PostedByDocument {
name: string;
title: string;
type: string;
fields: PostedByField[];
}

interface PostedByField {
name: string;
title: string;
type: string;
}

interface SaveDocument {
name: string;
title: string;
type: string;
fields: SaveField[];
}

// export default {
// name: 'save',
// title: 'Save',
// type: 'document',
// fields:[
// {
// name: 'postedBy',
// title: 'PostedBy',
// type: 'postedBy',
// },
// {
// name: 'userId',
// title: 'UserId',
// type: 'string',
// },
// ]
// }

interface SaveField {
name: string;
title: string;
type: string;
}

export const schemaTypes: (UserDocument | CommentDocument | PinDocument | PostedByDocument | SaveDocument)[] = [
{
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
},
{
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
},
{
name: 'pin',
title: 'Pin',
type: 'document',
fields: [
{
name: 'title',
title: 'Title',
type: 'string',
},
{
name: 'about',
title: 'About',
type: 'string',
},
{
name: 'destination',
title: 'Destination',
type: 'url',
},
{
name: 'category',
title: 'Category',
type: 'string',
},
{
name: 'image',
title: 'Image',
type: 'image',
options: {
hotspot: true
}
},
{
name: 'userId',
title: 'UserId',
type: 'string',
},
{
name: 'postedBy',
title: 'PostedBy',
type: 'postedBy',
},
{
name: 'save',
title: 'Save',
type: 'array',
of: [{ type: 'save' }]
},
{
name: 'comments',
title: 'Comments',
type: 'array',
of: [{ type: 'comment' }]
},
]
},
{
name: 'postedBy',
title: 'PostedBy',
type: 'document',
fields: [
{
name: 'placeholderField',
title: 'Placeholder Field',
type: 'string', // Use a suitable type for your placeholder field
}
]
},
{
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
}
];
