import AdminSidebar from "../adminSidebar/AdminSidebar";

export default function AdminPage() {
  return (
    <div className="flex h-[1000px] bg-gray-400">
      <div className="ml-[35%] w-full p-8">
        <h1 className="text-2xl  font-bold bg-[#63001F] w-[450px] h-16 flex items-center justify-center text-white rounded-xl">
          Добро пожаловать в админку!
        </h1>
        {/* Здесь можно добавить содержимое админки */}
      </div>
    </div>
  );
}
