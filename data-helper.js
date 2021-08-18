export function listToTree(list, userOptions={}) {
    const options = { id: 'id', parentId: 'parentId', children: 'children', ...userOptions };
    const { id, parentId, children, } = options;

    let itemMap = {};
    list.map(item => {
        itemMap[item[id]] = item;
    })
    list.filter(item => item[parentId]).map(item => {
        if (!itemMap[item[parentId]][children]) {
            itemMap[item[parentId]][children] = [];
        }
        itemMap[item[parentId]][children].push(item);
    });
    
    let treeList = []; 
    Object.values(itemMap).map(item => {
        if (!item[parentId]) {
            treeList.push(item);
        }
    });

    return treeList;
}