export const Str = (str) => {
    return {
        // Determines if a string begins with the given string
        starts_with (value) {
            return str.indexOf(value) === 0;
        },

        // Determines if a string ends with the given string
        ends_with (value) {
            let location = str.indexOf(value);
            return location + value.length === str.length;
        },

        // Replaces first occurrence of the given value
        replace_first (key, value) {
            let location = str.indexOf(key);

            return str.valueOf().substring(0, location)
                + value
                + str.valueOf().substring(location + key.length);
        },

        // Replaces last occurrence of the given value
        replace_last (key, value) {
            let location = str.lastIndexOf(key);

            return str.valueOf().substring(0, location)
                + value
                + str.valueOf().substring(location + key.length);
        },
        // Generates a GUID string Str('').guid()
        // @example: af8a8416-6e18-a307-bd9c-f2c947bbb3aa
        guid() {
            return _p8() + _p8(true) + _p8(true) + _p8();
        },
        // Capitalize the first letter of a string
        capitalize() {
            if (typeof str !== 'string') return '';
            return str.charAt(0).toUpperCase() + str.slice(1)
        },
        // Slugify a string
        slugify() {
            if(!str)
                return null;

            str = str.replace(/^\s+|\s+$/g, '');
            // Make the string lowercase
            str = str.toLowerCase();
            // Remove invalid chars
            str = str.replace(/[^a-z0-9 -]/g, '')
                // Collapse whitespace and replace by -
                .replace(/\s+/g, '-')
                // Collapse dashes
                .replace(/-+/g, '-');

            return str;
        },
        resolveUrl() {
            if(!str)
                return null;
            str = str.toLowerCase().trim();
            return str.replace(/^(?!(?:\w+:)?\/\/)/, 'http://');
        },
        // Search for anything that is surrounded by the brackets, and replaces it with the values from data object
        // @example: Str('{name} details').render({name: 'madera'}) will return 'madera details'
        render(data) {
            return str.replace(/{(.*?)}/g, match => data[match.split(/{|}/).filter(Boolean)[0]])
        }
    }
};

function _p8(s) {
    let p = (Math.random().toString(16)+"000000000").substr(2,8);
    return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
}