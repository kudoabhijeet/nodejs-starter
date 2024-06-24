import Memcached from 'memcached';

const memcached = new Memcached('memcached:11211');

export const setCache = (key: string, data: any, ttl: number) => {
    memcached.set(key, data, ttl, function (err) {
        if (err) console.error('Memcached Set Error:', err);
    });
};

export const getCache = (key: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        memcached.get(key, function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};

export const clearCache = (key: string) => {
    memcached.del(key, function (err) {
        if (err) console.error('Memcached Delete Error:', err);
    });
};
