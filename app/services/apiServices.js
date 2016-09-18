'use strict';

GameOfDrones.factory('APIServices', ['Restangular', function (Restangular) {
    // Gets app moves.
    var getMoves = function () {
        return Restangular.one("moves").get();
    }

    var saveMoves = function (moves) {
        return Restangular.all("moves").post(moves);
    }

    // //Get clients info.
    // var userLogin = function (doctype, clientId, email) {
    //     return Restangular.one('clients').customPOST({}, 'loginpost', { typeId: doctype.listId, clientId: clientId, email: email }, {});
    // }

    // //Get clients info.
    // var userLogout = function () {
    //     return Restangular.one('clients').one('logout').remove();
    // }

    // //Get consultant info.
    // var consultantLogin = function (displayName, password) {
    //     return Restangular.one('consultants').all('login').post({ displayName: displayName, password: password });
    // }

    // //Get consultant info.
    // var consultantLogout = function () {
    //     return Restangular.one('consultants').one('logout').remove();
    // }

    // // Gets topics list.
    // var getList = function (list) {
    //     return Restangular.all("lists").getList({ paramValue: list });
    // }

    // // Get session data.
    // var createSession = function (topicId, clientId, clientName, clientEmail) {

    //     return Restangular.one("sessions").get({
    //         topicId: topicId,
    //         clientId: clientId,
    //         clientName: clientName,
    //         clientEmail: clientEmail
    //     });
    // }

    // var acceptAppointment = function (appointment) {
    //     return Restangular.one('appointments', appointment.appointmentId).one('accept').put();
    // }

    // var rejectAppointment = function (appointment) {
    //     return Restangular.one('appointments', appointment.appointmentId).one('reject').put();
    // }

    // var getAppointments = function (idConsultant, date) {
    //     return Restangular.one('appointments').customGET("scheduledappointments", { idConsultant: idConsultant, date: date });
    // }

    // //Agendar una cita.
    // var scheduleAppointment = function (clientId, consultantId, date, topic, phone, clientName, enterpriseId, enterpriseName, clientEmail) {
    //     return Restangular.one('appointments').customPOST({}, 'scheduledappointments',
    //         {
    //             clientId: clientId,
    //             consultantId: consultantId,
    //             date: date,
    //             topic: topic,
    //             phone: phone,
    //             clientName: clientName,
    //             enterpriseId: enterpriseId,
    //             enterpriseName: enterpriseName,
    //             clientEmail: clientEmail
    //         }, {});
    // }

    // //Agendar una cita.
    // var cancelAppointment = function (appointment) {
    //     return Restangular.one('appointments').customDELETE('scheduledappointments', { appointmentId: appointment.appointmentId }, {});
    // }

    // //Transfers call.
    // var transfer = function (topicId, sessionId) {
    //     return Restangular.one('sessions').one('transfer').put({ topicId: topicId, sessionId: sessionId });
    // }

    // //Retornar últimas sesiones para el historial
    // var getLastSessions = function (clientId, quantity) {
    //     return Restangular.one("sessions").one('last').get({ clientId: clientId, quantity: quantity });
    // }

    // var getMediaHistory = function (sessionId) {
    //     return Restangular.one("history").one(sessionId).one('media').getList();
    //     // return Restangular.one("history").one('2_MX40NDcxODk3Mn4xOTAuMTMxLjIwMi45OH5XZWQgQXByIDA5IDEyOjUwOjQ2IFBEVCAyMDE0fjAuNzA1NTI3OH5-').one('media').getList();
    // }

    // var getLibraryHistory = function (sessionId) {
    //     return Restangular.one("history").one(sessionId).one('library').getList();
    //     // return Restangular.one("history").one('2_MX40NDcxODk3Mn4xOTAuMTMxLjIwMi45OH5XZWQgQXByIDA5IDEyOjUwOjQ2IFBEVCAyMDE0fjAuNzA1NTI3OH5-').one('library').getList();
    // }

    // var getChatHistory = function (sessionId) {
    //     return Restangular.one("history").one(sessionId).one('chat').getList();
    // }

    // var getSubjects = function () {
    //     return Restangular.one("subject").getList();
    // }

    // var getCategories = function (subject) {
    //     return Restangular.one("subject").one("categorybysubject").get({ subject: subject });
    // }

    // var acceptSession = function (sessionId) {
    //     return Restangular.one('sessions', sessionId).one('accept').put();
    // }

    // var rejectSession = function (sessionId) {
    //     return Restangular.one('sessions', sessionId).one('reject').put();
    // }

    // var avaliableConsultant = function (consultantId) {
    //     return Restangular.one('consultants', consultantId).one('available').put();
    // }

    // var busyConsultant = function (consultantId) {
    //     return Restangular.one('consultants', consultantId).one('busy').put();
    // }

    // //Guardar datos de gestion.
    // var postAccomplishment = function (accomplishment) {
    //     return Restangular.one('integration').all('accomplishment').post(accomplishment);
    // }

    return {
        getMoves: getMoves,
        getMoves: getMoves
    }
}]);