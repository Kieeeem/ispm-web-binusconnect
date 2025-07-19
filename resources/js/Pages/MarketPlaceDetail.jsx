import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images, onSelect, selectedIdx }) => {
    return (
        <div className="flex space-x-2 overflow-x-auto mt-2">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Product ${index + 1}`}
                    className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded shadow cursor-pointer border-2 ${
                        selectedIdx === index
                            ? "border-blue-500"
                            : "border-transparent"
                    }`}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
};

const CommentSection = ({ typingBoxOnTop }) => {
    const [comments, setComments] = useState([
        {
            name: "Daniel Roberts",
            role: "Information Systems | B28 | Kemanggisan Campus",
            avatar: "https://ui-avatars.com/api/?name=Daniel+Roberts",
            message: "Where can i buy for this food?",
            org: null,
        },
        {
            name: "HIMTES",
            role: "Himpunan Mahasiswa Teknik Sipil",
            avatar: "/img/himtes-logo.png",
            message:
                "We can meet at BINUS Kemanggisan campus area or any nearby public place that's convenient for both of us.",
            org: true,
        },
    ]);
    const [newComment, setNewComment] = useState("");
    const addComment = () => {
        if (newComment.trim() === "") return;
        setComments([
            ...comments,
            {
                name: "You",
                role: null,
                avatar: "https://ui-avatars.com/api/?name=You",
                message: newComment,
                org: null,
            },
        ]);
        setNewComment("");
    };
    return (
        <div
            className="mt-8 rounded-2xl p-4 md:p-6"
            style={{ background: "transparent", boxShadow: "none" }}
        >
            <h2 className="text-lg font-semibold mb-2">Discussion</h2>
            {typingBoxOnTop && (
                <div className="flex mb-4 gap-2 flex-wrap items-center">
                    <input
                        type="text"
                        placeholder="Ask a question about this item..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1 border rounded p-2 w-full md:w-auto"
                    />
                    <button
                        onClick={addComment}
                        className="bg-orange-500 text-white px-6 py-2 rounded font-semibold w-full md:w-auto"
                    >
                        Send
                    </button>
                </div>
            )}
            <div className="space-y-0">
                {comments.map((comment, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 relative min-h-[70px]"
                    >
                        {index !== comments.length - 1 && (
                            <span className="absolute left-5 top-12 w-px h-[calc(100%+12px)] bg-gray-300 z-0"></span>
                        )}
                        {comment.avatar ? (
                            <img
                                src={comment.avatar}
                                alt={comment.name}
                                className="w-10 h-10 rounded-full z-10"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-lg z-10">
                                {comment.name[0]}
                            </div>
                        )}
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-base">
                                    {comment.name}
                                </span>
                                {comment.org && (
                                    <span className="flex items-center gap-1 ml-2">
                                        {comment.avatar && (
                                            <img
                                                src={comment.avatar}
                                                alt="org"
                                                className="w-4 h-4 rounded-full"
                                            />
                                        )}
                                        <span className="text-xs text-gray-500 font-medium">
                                            {comment.role}
                                        </span>
                                    </span>
                                )}
                            </div>
                            {!comment.org && comment.role && (
                                <div className="text-xs text-gray-500 mb-1">
                                    {comment.role}
                                </div>
                            )}
                            <div className="bg-white rounded-xl px-4 py-2 mt-1 mb-4 text-gray-800 shadow-sm w-fit max-w-xl">
                                {comment.message}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {!typingBoxOnTop && (
                <div className="flex mt-4 gap-2 flex-wrap items-center">
                    <input
                        type="text"
                        placeholder="Ask a question about this item..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1 border rounded p-2 w-full md:w-auto"
                    />
                    <button
                        onClick={addComment}
                        className="bg-orange-500 text-white px-6 py-2 rounded font-semibold w-full md:w-auto"
                    >
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

const MarketplaceDetail = () => {
    const product = {
        title: "PO Kuliner Sipil 11–18 Maret 2025",
        status: "Ongoing",
        duration: "11–18 Maret 2025",
        location: "Binus Syahdan",
        soldBy: "HIMTES\nHimpunan Mahasiswa Teknik Sipil",
        description:
            "Buat kalian yang lagi cari camilan enak, yuk order sekarang! Semua makanan dibuat dengan bahan berkualitas, diolah dengan penuh cinta, dan pastinya bikin nagih di setiap gigitan. Cocok banget buat nemenin santai, teman belajar, atau sekadar menikmati waktu luang. Dijamin sekali coba, pasti pengen lagi!",
        menu: [
            { name: "Dimsum", price: "10K/5pcs" },
            { name: "Pastel", price: "5K" },
            { name: "Lemper", price: "5K" },
            { name: "Puding", price: "5K" },
            { name: "Semangka Susu Evaporasi", price: "10K" },
            { name: "Truffle Choco", price: "12K" },
            { name: "Es Cincau", price: "15K" },
        ],
        orderLink: "http://bit.ly/3fiUi0s",
        closeOrder: "Sabtu, 18 Maret 2025 | Pukul 19.00 WIB",
        contact: {
            name: "Haura Nayla Clarinta",
            wa: "081383984913",
        },
        images: [
            "/img/makan.webp",
            "/img/makan.webp",
            "/img/makan2.png",
            "/img/makan3.webp",
        ],
    };
    const [selectedImageIdx, setSelectedImageIdx] = useState(0);

    useEffect(() => {
        document.body.style.background = "#EFEFEF";
        return () => {
            document.body.style.background = "";
        };
    }, []);

    const handlePrevImage = () => {
        setSelectedImageIdx((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };
    const handleNextImage = () => {
        setSelectedImageIdx((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };
    return (
        <div className="p-4 md:p-8 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:basis-[60%] lg:max-w-[60%] flex flex-col gap-6">
                    <div className="relative flex flex-col items-center">
                        <button
                            onClick={() => window.history.back()}
                            className="absolute -top-6 left-0 z-30 w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-0 focus:outline-none"
                            style={{ background: "#0099DC" }}
                            aria-label="Back"
                        >
                            <span className="text-2xl font-bold text-white">
                                &#8592;
                            </span>
                        </button>
                        <div className="w-full max-w-[640px] h-[640px] bg-white rounded shadow mb-2 overflow-hidden flex items-center justify-center relative">
                            <img
                                src={product.images[selectedImageIdx]}
                                alt="Main Product"
                                className="object-cover w-full h-full"
                            />
                            <button
                                onClick={handlePrevImage}
                                className="absolute top-1/2 left-2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-20 border-0 focus:outline-none"
                                style={{ background: "#0099DC" }}
                                aria-label="Previous image"
                            >
                                <span className="text-3xl font-bold text-white">
                                    &#60;
                                </span>
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute top-1/2 right-2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-20 border-0 focus:outline-none"
                                style={{ background: "#0099DC" }}
                                aria-label="Next image"
                            >
                                <span className="text-3xl font-bold text-white">
                                    &#62;
                                </span>
                            </button>
                        </div>
                        <div className="flex gap-3 w-full justify-center mt-2">
                            {product.images.slice(0, 4).map((image, idx) => (
                                <img
                                    key={idx}
                                    src={image}
                                    alt={`Thumbnail ${idx + 1}`}
                                    onClick={() => setSelectedImageIdx(idx)}
                                    style={{
                                        width: "148.34px",
                                        height: "148.43px",
                                    }}
                                    className={`object-cover rounded shadow cursor-pointer border-2 ${
                                        selectedImageIdx === idx
                                            ? "border-blue-500"
                                            : "border-transparent"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <div
                            style={{
                                width: "640px",
                                background: "#FFFFFF",
                                borderRadius: "1rem",
                                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
                            }}
                        >
                            <CommentSection typingBoxOnTop={true} />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:basis-[40%] lg:max-w-[40%] space-y-6 text-lg pt-2 lg:pl-8 flex flex-col justify-start">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        {product.title}
                    </h1>
                    <hr className="my-2 border-gray-300" />
                    <div className="space-y-1 text-base">
                        <div>
                            <span className="font-semibold">Status:</span>{" "}
                            <span className="text-green-600">
                                {product.status}
                            </span>
                        </div>
                        <div>
                            <span className="font-semibold">Duration:</span>{" "}
                            {product.duration}
                        </div>
                        <div>
                            <span className="font-semibold">Location:</span>{" "}
                            {product.location}
                        </div>
                        <div>
                            <span className="font-semibold">Sold By:</span>{" "}
                            {product.soldBy}
                        </div>
                    </div>
                    <hr className="my-2 border-gray-300" />
                    <div>
                        <h2 className="text-lg font-semibold mt-4 mb-1">
                            Description
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base">
                            {product.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mt-4 mb-1">
                            Berikut menu makanannya:
                        </h3>
                        <ul className="list-disc pl-6 text-sm md:text-base text-gray-700">
                            {product.menu.map((item, idx) => (
                                <li key={idx}>
                                    <span className="font-medium">
                                        {item.name}
                                    </span>{" "}
                                    <span className="text-gray-500">
                                        | {item.price}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-2">
                        <span className="font-semibold">Link Pemesanan: </span>
                        <a
                            href={product.orderLink}
                            className="text-blue-600 underline break-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {product.orderLink}
                        </a>
                    </div>
                    <div className="mt-2">
                        <span className="font-semibold text-orange-600">
                            ⚠️ Close Order:
                        </span>{" "}
                        <span>{product.closeOrder}</span>
                    </div>
                    <div className="mt-2">
                        <span className="font-semibold">
                            {product.contact.name}
                        </span>{" "}
                        <br />
                        <span className="text-gray-700">
                            (WA): {product.contact.wa}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketplaceDetail;
