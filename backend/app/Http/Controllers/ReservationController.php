<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ReservationCollection;
use App\Http\Resources\ReservationResource;
use App\Models\Book;
use App\Models\Reservation;
use App\Models\User;

class ReservationController extends Controller
{
    public function index($user_id)
    {
        $allReservations = Reservation::get()->where('user_id', $user_id);

        if ($allReservations->isEmpty()) {
            return response()->json(['message' => 'data not found'], 404);
        }

        $reservations = $allReservations->filter(function ($reservation) {
            return $reservation['book'] !== null;
        });

        $reservations->all();

        return new ReservationCollection($reservations);
    }

    public function store($userid, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'bookid' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $book = Book::find($request->bookid);
        $user = User::find($userid);

        if (is_null($book) || is_null($user)) {
            return response()->json(['message' => 'data not found'], 403);
        }

        $reservation = Reservation::create([
            'book_id' => $book->id,
            'user_id' => $user->id
        ]);

        return response()->json(['message' => 'reservation created successfully', 'reservation' => new ReservationResource($reservation)], 200);
    }

    public function destroy($userid, $reservationid)
    {
        $reservation = Reservation::find($reservationid);

        if (is_null($reservation)) {
            return response()->json(['message' => 'data not found'], 403);
        }

        if ($reservation->user_id != $userid) {
            return response()->json(['message' => 'invalid user'], 403);
        }

        $reservation->delete();

        return response()->json(['message' => 'reservation deleted successfully'], 200);
    }
}
