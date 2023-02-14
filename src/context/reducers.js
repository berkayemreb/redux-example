export default function (state, action) {

    switch (action.type) {

        case 'ADD_NAME':
            const { name } = action.payload;
            // action.payload: bizim textInputa yazdığımız nesneleri action.payload'ın içerisine düşmesini sağladık. Bizde bu değerler ulaşmak için bu şekilde bir yol izleyebiliriz.

            const newList = [...state.nameList, name]; // "name: name" yazmak yerine sadece "name" yazarak es6 nın getirdiği özelliği kullandık.  
            // listenin son halinin içine yeni bir değer (name) eklemek istediğimiz için bu şekilde "..." kullandık.

            return { ...state, nameList: newList };
        // birden fazla state'imiz (nameList gibi) olabilirdi böyle bir durumda diğer stateleri olduğu gibi korumamız lazım o yüzden "..." kullandık.

        case 'CLEAN_LIST':
            return { ...state, nameList: [] };

            
        default:
            return state;
    }

}