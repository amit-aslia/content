// import 1rom "random-id";

const data = Object.freeze({
    inbox: {
        category: [
            {
                id: 1,
                title: "Lunch with detective",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: false,
                path: 'inbox.category'
            },
            {
                id: 1,
                title: "New case files",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: false
            },
            {
                id: 1,
                title: "Forensics report from Ella",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: false
            },
            {
                id: 1,
                title: "Pierce murder history files",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: true
            }
        ],
        subCategory: {
            forensics: {
                category: [
                    {
                        id: 1,
                        title: "Blood report from Ohio crime scene",
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                        isRead: false,
                        path: 'inbox.subCategory.forensics.category'
                    }
                ]
            },
            homicide: {
                category: []
            },
            'case-files': {
                category: []
            }
        }
    },

    starred: {
        category: []
    },
    sent: {
        category: []
    },
    drafts: {
        category: [
            {
                id: 1,
                title: "Procurement of new devices",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            },
            {
                id: 1,
                title: "Party in office",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            }
        ]
    }
});


const findPath = findKey => {
    let flag = 'amit'; 
    Object.keys(data).some(key => {
        if(key === findKey) {
            flag = `${key}.category`;
            return key === findKey;
        };
        if(data[key].subCategory) {
            const subCategory = {...data[key].subCategory};
            Object.keys(subCategory).some(subKey => {
                if(subKey === findKey) {
                    flag = `${key}.subcategory.${subKey}.category`;
                    return subKey === findKey;
                };
            });

        }
    });
    return flag;
};

console.log(findPath('forensics'))

