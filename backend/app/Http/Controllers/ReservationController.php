<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ReservationCollection;
use App\Http\Resources\ReservationResource;
use App\Models\Book;
use App\Models\Reservation;

class ReservationController extends Controller
{
    public function index($user_id)
    {
        $reservations = Reservation::where('user_id', $user_id)->get();

        if ($reservations->isEmpty()) {
            return response()->json('Data not found', 404);
        }
        return new ReservationCollection($reservations);
    }

    public function store($user_id, Request $request)
    {

        $validator = Validator::make($request->all(), [
            'book_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $books = Book::where('id', $request->book_id)->get();

        if ($books->isEmpty()) {
            return response()->json('No such book in database', 404);
        }

        $reservation = Reservation::create([
            'book_id' => $request->book_id,
            'user_id' => $user_id
        ]);

        return response()->json(['Reservation created successfully', new ReservationResource($reservation)]);
    }
}
