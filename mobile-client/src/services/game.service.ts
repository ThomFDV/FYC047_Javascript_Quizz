import ApiService from './api.service';

class ResponseError extends Error {
    errorCode: any;
    errorMessage: any;
    constructor(errorCode: any, message: string | undefined) {
        super(message);
        this.name = this.constructor.name;
        if (message != null) {
            this.message = message;
        }
        this.errorCode = errorCode;
    }
}

const GameService = {
    getRoom: async function(roomId: string) {
        try {
            return await ApiService.get(`/room/${roomId}`);
        } catch(error) {
            throw new ResponseError(
                error.status,
                error.error.message
            );
        }
    },

    connectPlayer: async function(roomId: string, player: string) {
        try {
            return await ApiService.post(`/room/${roomId}`, { name: player })
        } catch(error) {
            throw new ResponseError(
                error.status,
                error.error.message
            );
        }
    },

    catchError: function(error: any) {
        let status;
        let description;

        if (error.response === undefined) {
            status = error.message;
            description = error.message;
        } else {
            status = error.response.status;
            description = error.response.data.error_description;
        }

        throw new ResponseError(status, description); 
    }
}

export { GameService, ResponseError };