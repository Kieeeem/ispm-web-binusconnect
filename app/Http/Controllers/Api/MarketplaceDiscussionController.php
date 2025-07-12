<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Marketplace;
use App\Models\MarketplaceDiscussion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class MarketplaceDiscussionController extends Controller
{
    public function index(Marketplace $marketplace)
    {
        $discussions = MarketplaceDiscussion::where('idMarketplace', $marketplace->idMarketplace)
                                            ->with('user')
                                            ->latest()
                                            ->get();
        return response()->json(['success' => true, 'data' => $discussions]);
    }

    public function store(Request $request, Marketplace $marketplace)
    {
        $validator = Validator::make($request->all(), [
            'isiDiscussion' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $discussion = $marketplace->discussions()->create([
            'idDiscussion'   => Str::random(10),
            'isiDiscussion'  => $request->isiDiscussion,
            'idUser'         => auth()->id(),
        ]);

        $discussion->load('user');
        return response()->json(['success' => true, 'message' => 'Diskusi berhasil dikirim', 'data' => $discussion], 201);
    }

    public function update(Request $request, MarketplaceDiscussion $discussion)
    {
        if (auth()->id() !== $discussion->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $validator = Validator::make($request->all(), ['isiDiscussion' => 'required|string|max:255']);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $discussion->update($request->only('isiDiscussion'));
        return response()->json(['success' => true, 'message' => 'Diskusi berhasil diupdate', 'data' => $discussion]);
    }

    public function destroy(MarketplaceDiscussion $discussion)
    {
        if (auth()->id() !== $discussion->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $discussion->delete();
        return response()->json(['success' => true, 'message' => 'Diskusi berhasil dihapus']);
    }
}