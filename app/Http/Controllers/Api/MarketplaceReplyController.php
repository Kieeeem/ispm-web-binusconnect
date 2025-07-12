<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MarketplaceDiscussion;
use App\Models\MarketplaceReply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class MarketplaceReplyController extends Controller
{
    public function store(Request $request, MarketplaceDiscussion $discussion)
    {
        $validator = Validator::make($request->all(), [
            'isiReplyDiscussion' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $reply = $discussion->replies()->create([
            'idReplyDiscussion'   => Str::random(10),
            'isiReplyDiscussion'  => $request->isiReplyDiscussion,
            'idUser'              => auth()->id(),
        ]);

        $reply->load('user');
        return response()->json(['success' => true, 'message' => 'Balasan berhasil dikirim', 'data' => $reply], 201);
    }

    public function update(Request $request, MarketplaceReply $reply)
    {
        if (auth()->id() !== $reply->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $validator = Validator::make($request->all(), ['isiReplyDiscussion' => 'required|string']);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $reply->update($request->only('isiReplyDiscussion'));
        return response()->json(['success' => true, 'message' => 'Balasan berhasil diupdate', 'data' => $reply]);
    }

    public function destroy(MarketplaceReply $reply)
    {
        if (auth()->id() !== $reply->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $reply->delete();
        return response()->json(['success' => true, 'message' => 'Balasan berhasil dihapus']);
    }
}