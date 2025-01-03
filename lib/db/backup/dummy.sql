-- Main Categories
INSERT INTO main_categories (id, name) VALUES
  (gen_random_uuid(), 'Computers & Tablets'),
  (gen_random_uuid(), 'Networking'),
  (gen_random_uuid(), 'Storage'),
  (gen_random_uuid(), 'Components'),
  (gen_random_uuid(), 'Peripherals');

-- Subcategories
INSERT INTO sub_categories (id, name, "mainCategoryId") VALUES
  (gen_random_uuid(), 'Laptops', (SELECT id FROM main_categories WHERE name = 'Computers & Tablets')),
  (gen_random_uuid(), 'Tablets', (SELECT id FROM main_categories WHERE name = 'Computers & Tablets')),
  (gen_random_uuid(), 'Routers', (SELECT id FROM main_categories WHERE name = 'Networking')),
  (gen_random_uuid(), 'Switches', (SELECT id FROM main_categories WHERE name = 'Networking')),
  (gen_random_uuid(), 'SSD', (SELECT id FROM main_categories WHERE name = 'Storage')),
  (gen_random_uuid(), 'External Hard Drives', (SELECT id FROM main_categories WHERE name = 'Storage')),
  (gen_random_uuid(), 'Processors', (SELECT id FROM main_categories WHERE name = 'Components')),
  (gen_random_uuid(), 'Graphics Cards', (SELECT id FROM main_categories WHERE name = 'Components')),
  (gen_random_uuid(), 'Keyboards', (SELECT id FROM main_categories WHERE name = 'Peripherals')),
(gen_random_uuid(), 'Microphones', (SELECT id FROM main_categories WHERE name = 'Peripherals')),
(gen_random_uuid(), 'Monitors', (SELECT id FROM main_categories WHERE name = 'Peripherals')),
(gen_random_uuid(), 'Motherboards', (SELECT id FROM main_categories WHERE name = 'Components')),
(gen_random_uuid(), 'Ram', (SELECT id FROM main_categories WHERE name = 'Components')),
(gen_random_uuid(), 'PSU', (SELECT id FROM main_categories WHERE name = 'Components')),
  (gen_random_uuid(), 'Mice', (SELECT id FROM main_categories WHERE name = 'Peripherals'));

-- Products
INSERT INTO products (id, title, description, price, slug, img, stock, "OrderThreshold", "subcategoryId", "createdAt") VALUES
 -- Laptops 20
(gen_random_uuid(), 'Dell XPS 13', 'The Dell XPS 13 features a 13.4-inch InfinityEdge display, 11th Gen Intel Core processors, up to 16GB RAM, and a 512GB SSD. Ideal for professionals on the go.', 1299.99, 'dell-xps-13', ARRAY['https://example.com/dell-xps-13.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'MacBook Air M2', 'Apple MacBook Air with the M2 chip offers a 13.6-inch Liquid Retina display, 8-core CPU, 8-core GPU, and up to 18 hours of battery life.', 1199.99, 'macbook-air-m2', ARRAY['https://example.com/macbook-air-m2.jpg'], 30, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'HP Spectre x360', 'The HP Spectre x360 is a versatile 2-in-1 laptop with a 13.5-inch OLED display, Intel Evo platform, and up to 1TB SSD storage.', 1399.99, 'hp-spectre-x360', ARRAY['https://example.com/hp-spectre-x360.jpg'], 20, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Lenovo ThinkPad X1 Carbon', 'The Lenovo ThinkPad X1 Carbon Gen 10 comes with a 14-inch WQHD+ display, 12th Gen Intel Core i7, and military-grade durability.', 1499.99, 'lenovo-thinkpad-x1-carbon', ARRAY['https://example.com/lenovo-thinkpad-x1-carbon.jpg'], 25, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Asus ROG Zephyrus G14', 'Asus ROG Zephyrus G14 is a compact gaming laptop featuring a 14-inch QHD display, AMD Ryzen 9 processor, and NVIDIA GeForce RTX 3060.', 1649.99, 'asus-rog-zephyrus-g14', ARRAY['https://example.com/asus-rog-zephyrus-g14.jpg'], 15, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Microsoft Surface Laptop 5', 'Microsoft Surface Laptop 5 offers a sleek design, 13.5-inch touchscreen display, Intel Core i7, and all-day battery life.', 1299.99, 'microsoft-surface-laptop-5', ARRAY['https://example.com/microsoft-surface-laptop-5.jpg'], 40, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Acer Swift 5', 'The Acer Swift 5 features a 14-inch Full HD touchscreen, Intel Core i7-1260P, and antimicrobial design for a healthier workspace.', 1099.99, 'acer-swift-5', ARRAY['https://example.com/acer-swift-5.jpg'], 35, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Razer Blade 15', 'Razer Blade 15 Advanced Model includes a 15.6-inch QHD display, Intel Core i9-12900H, and NVIDIA GeForce RTX 3080 Ti.', 2999.99, 'razer-blade-15', ARRAY['https://example.com/razer-blade-15.jpg'], 10, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'LG Gram 16', 'The LG Gram 16 offers a lightweight design, 16-inch WQXGA display, 12th Gen Intel Core i7, and up to 19.5 hours of battery life.', 1499.99, 'lg-gram-16', ARRAY['https://example.com/lg-gram-16.jpg'], 20, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Samsung Galaxy Book Pro', 'Samsung Galaxy Book Pro features a 15.6-inch AMOLED display, Intel Core i7 processor, and seamless Galaxy ecosystem integration.', 1199.99, 'samsung-galaxy-book-pro', ARRAY['https://example.com/samsung-galaxy-book-pro.jpg'], 25, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Huawei MateBook X Pro', 'Huawei MateBook X Pro 2022 features a 14.2-inch 3.1K FullView Display, Intel Core i7-1260P, and sleek metallic finish.', 1599.99, 'huawei-matebook-x-pro', ARRAY['https://example.com/huawei-matebook-x-pro.jpg'], 18, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Dell Inspiron 15', 'Dell Inspiron 15 offers a 15.6-inch FHD display, 11th Gen Intel Core i5, and a comfortable keyboard for everyday tasks.', 749.99, 'dell-inspiron-15', ARRAY['https://example.com/dell-inspiron-15.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'MSI GS66 Stealth', 'MSI GS66 Stealth is a high-performance gaming laptop with a 15.6-inch QHD display, Intel Core i9, and NVIDIA RTX 3070.', 1999.99, 'msi-gs66-stealth', ARRAY['https://example.com/msi-gs66-stealth.jpg'], 12, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Lenovo Yoga 7i', 'Lenovo Yoga 7i is a convertible laptop featuring a 14-inch FHD touchscreen, Intel Core i7, and up to 16GB RAM.', 999.99, 'lenovo-yoga-7i', ARRAY['https://example.com/lenovo-yoga-7i.jpg'], 35, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Asus ZenBook 14', 'Asus ZenBook 14 boasts a 14-inch NanoEdge display, AMD Ryzen 7, and long-lasting battery in an ultra-thin design.', 899.99, 'asus-zenbook-14', ARRAY['https://example.com/asus-zenbook-14.jpg'], 45, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Gigabyte Aero 16', 'Gigabyte Aero 16 OLED offers a 16-inch 4K UHD display, Intel Core i7-12700H, and NVIDIA RTX 3080.', 2599.99, 'gigabyte-aero-16', ARRAY['https://example.com/gigabyte-aero-16.jpg'], 8, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Alienware m15 R6', 'Alienware m15 R6 gaming laptop with a 15.6-inch QHD display, Intel Core i7, and NVIDIA RTX 3070 for an immersive experience.', 1899.99, 'alienware-m15-r6', ARRAY['https://example.com/alienware-m15-r6.jpg'], 15, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'HP Omen 16', 'HP Omen 16 is a gaming laptop with a 16.1-inch FHD display, AMD Ryzen 7, and NVIDIA GeForce RTX 3060 graphics.', 1549.99, 'hp-omen-16', ARRAY['https://example.com/hp-omen-16.jpg'], 22, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Asus VivoBook 15', 'Asus VivoBook 15 is a budget-friendly option featuring a 15.6-inch FHD display, Intel Core i3, and 8GB RAM.', 549.99, 'asus-vivobook-15', ARRAY['https://example.com/asus-vivobook-15.jpg'], 60, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),
(gen_random_uuid(), 'Acer Predator Helios 300', 'Acer Predator Helios 300 delivers powerful gaming with a 15.6-inch QHD display, Intel Core i7, and NVIDIA RTX 3060.', 1799.99, 'acer-predator-helios-300', ARRAY['https://example.com/acer-predator-helios-300.jpg'], 18, 10, (SELECT id FROM sub_categories WHERE name = 'Laptops'), now()),


-- Tablets 20
(gen_random_uuid(), 'Apple iPad Pro 12.9"', 'Apple iPad Pro with M2 chip, 12.9-inch Liquid Retina XDR display, 128GB storage, Wi-Fi connectivity.', 1099.99, 'apple-ipad-pro-12-9', ARRAY['https://example.com/ipad-pro.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Samsung Galaxy Tab S8 Ultra', 'Samsung Galaxy Tab S8 Ultra with 14.6-inch Super AMOLED display, 256GB storage, 5G connectivity.', 1149.99, 'samsung-galaxy-tab-s8-ultra', ARRAY['https://example.com/galaxy-tab-s8-ultra.jpg'], 40, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Microsoft Surface Pro 9', 'Microsoft Surface Pro 9 with 13-inch PixelSense Flow display, Intel Core i5, 8GB RAM, 256GB SSD.', 999.99, 'microsoft-surface-pro-9', ARRAY['https://example.com/surface-pro-9.jpg'], 30, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Lenovo Tab P12 Pro', 'Lenovo Tab P12 Pro with 12.6-inch AMOLED display, Snapdragon 870 processor, 128GB storage.', 649.99, 'lenovo-tab-p12-pro', ARRAY['https://example.com/lenovo-tab-p12-pro.jpg'], 25, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Amazon Fire HD 10', 'Amazon Fire HD 10 tablet with 10.1-inch Full HD display, 64GB storage, Alexa-enabled.', 149.99, 'amazon-fire-hd-10', ARRAY['https://example.com/fire-hd-10.jpg'], 100, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Huawei MatePad Pro 11', 'Huawei MatePad Pro 11 with OLED FullView display, Kirin 9000E processor, 256GB storage.', 799.99, 'huawei-matepad-pro-11', ARRAY['https://example.com/matepad-pro-11.jpg'], 20, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Xiaomi Pad 5', 'Xiaomi Pad 5 with 11-inch WQHD+ display, Snapdragon 860 processor, 128GB storage.', 399.99, 'xiaomi-pad-5', ARRAY['https://example.com/xiaomi-pad-5.jpg'], 60, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Google Pixel Tablet', 'Google Pixel Tablet with Tensor G2 processor, 10.95-inch display, 128GB storage.', 499.99, 'google-pixel-tablet', ARRAY['https://example.com/pixel-tablet.jpg'], 35, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Asus ROG Flow Z13', 'Asus ROG Flow Z13 gaming tablet with 13.4-inch FHD+ display, Intel Core i7, 16GB RAM, 512GB SSD.', 1799.99, 'asus-rog-flow-z13', ARRAY['https://example.com/rog-flow-z13.jpg'], 15, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Dell Latitude 7320 Detachable', 'Dell Latitude 7320 Detachable with 13-inch FHD+ display, Intel Core i5, 8GB RAM, 256GB SSD.', 1199.99, 'dell-latitude-7320-detachable', ARRAY['https://example.com/latitude-7320.jpg'], 10, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Apple iPad Air', 'Apple iPad Air with 10.9-inch Liquid Retina display, M1 chip, 64GB storage, Wi-Fi connectivity.', 599.99, 'apple-ipad-air', ARRAY['https://example.com/ipad-air.jpg'], 45, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Samsung Galaxy Tab S7 FE', 'Samsung Galaxy Tab S7 FE with 12.4-inch TFT display, Snapdragon 750G processor, 128GB storage.', 529.99, 'samsung-galaxy-tab-s7-fe', ARRAY['https://example.com/galaxy-tab-s7-fe.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Microsoft Surface Go 3', 'Microsoft Surface Go 3 with 10.5-inch PixelSense display, Intel Pentium Gold, 8GB RAM, 128GB SSD.', 399.99, 'microsoft-surface-go-3', ARRAY['https://example.com/surface-go-3.jpg'], 60, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Lenovo Yoga Tab 13', 'Lenovo Yoga Tab 13 with 13-inch 2K display, Snapdragon 870 processor, 128GB storage.', 679.99, 'lenovo-yoga-tab-13', ARRAY['https://example.com/yoga-tab-13.jpg'], 40, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Amazon Fire 7', 'Amazon Fire 7 tablet with 7-inch display, 32GB storage, Alexa-enabled.', 59.99, 'amazon-fire-7', ARRAY['https://example.com/fire-7.jpg'], 120, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Huawei MatePad 11', 'Huawei MatePad 11 with 11-inch 120Hz display, Snapdragon 865 processor, 128GB storage.', 499.99, 'huawei-matepad-11', ARRAY['https://example.com/matepad-11.jpg'], 30, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Xiaomi Redmi Pad', 'Xiaomi Redmi Pad with 10.61-inch 2K display, MediaTek Helio G99 processor, 128GB storage.', 279.99, 'xiaomi-redmi-pad', ARRAY['https://example.com/redmi-pad.jpg'], 75, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Google Nexus 9', 'Google Nexus 9 tablet with 8.9-inch QHD display, NVIDIA Tegra K1 processor, 32GB storage.', 399.99, 'google-nexus-9', ARRAY['https://example.com/nexus-9.jpg'], 15, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Asus ZenPad 3S 10', 'Asus ZenPad 3S 10 with 9.7-inch QHD display, MediaTek MT8176 processor, 64GB storage.', 299.99, 'asus-zenpad-3s-10', ARRAY['https://example.com/zenpad-3s-10.jpg'], 25, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),
(gen_random_uuid(), 'Dell Venue 10 7000', 'Dell Venue 10 7000 tablet with 10.5-inch OLED display, Intel Atom processor, 32GB storage.', 499.99, 'dell-venue-10-7000', ARRAY['https://example.com/venue-10-7000.jpg'], 20, 10, (SELECT id FROM sub_categories WHERE name = 'Tablets'), now()),



-- Routers 20
(gen_random_uuid(), 'ASUS ROG Rapture GT-AX11000', 'Tri-band WiFi 6 gaming router, 2.5G port, 1.8GHz quad-core CPU, AiMesh compatible.', 449.99, 'asus-rog-rapture-gt-ax11000', ARRAY['https://example.com/gt-ax11000.jpg'], 30, 5, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'NETGEAR Nighthawk RAX200', 'Tri-band AX11000 WiFi 6 router, 12-stream connectivity, 2.5G port.', 499.99, 'netgear-nighthawk-rax200', ARRAY['https://example.com/rax200.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'TP-Link Archer AX6000', 'Dual-band WiFi 6 router, 2.5Gbps WAN port, 1.8GHz quad-core CPU.', 299.99, 'tp-link-archer-ax6000', ARRAY['https://example.com/archer-ax6000.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'ASUS RT-AX86U', 'Dual-band WiFi 6 gaming router, 2.5G port, Mobile Game Mode.', 249.99, 'asus-rt-ax86u', ARRAY['https://example.com/rt-ax86u.jpg'], 45, 10, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'NETGEAR Orbi RBK852', 'Tri-band WiFi 6 mesh system, coverage up to 5,000 sq ft, 2.5G port.', 699.99, 'netgear-orbi-rbk852', ARRAY['https://example.com/orbi-rbk852.jpg'], 20, 5, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'TP-Link Deco X90', 'Tri-band WiFi 6 mesh system, AI-driven mesh, coverage up to 6,000 sq ft.', 449.99, 'tp-link-deco-x90', ARRAY['https://example.com/deco-x90.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'Linksys MR9600', 'Dual-band WiFi 6 router, Intelligent Mesh technology, 1.8GHz quad-core CPU.', 279.99, 'linksys-mr9600', ARRAY['https://example.com/mr9600.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'ASUS ZenWiFi XT8', 'Tri-band WiFi 6 mesh system, AiMesh 2.0, coverage up to 5,500 sq ft.', 449.99, 'asus-zenwifi-xt8', ARRAY['https://example.com/zenwifi-xt8.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'NETGEAR Nighthawk RAX120', 'Dual-band WiFi 6 router, 8-stream connectivity, 5Gbps port.', 399.99, 'netgear-nighthawk-rax120', ARRAY['https://example.com/rax120.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'TP-Link Archer AX90', 'Tri-band WiFi 6 router, 2.5Gbps port, HomeShield security.', 329.99, 'tp-link-archer-ax90', ARRAY['https://example.com/archer-ax90.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'ASUS RT-AX88U', 'Dual-band WiFi 6 router, 8 LAN ports, AiProtection Pro security.', 299.99, 'asus-rt-ax88u', ARRAY['https://example.com/rt-ax88u.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'NETGEAR Nighthawk RAX50', 'Dual-band WiFi 6 router, 6-stream connectivity, NETGEAR Armor.', 249.99, 'netgear-nighthawk-rax50', ARRAY['https://example.com/rax50.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'Linksys Velop AX4200', 'Tri-band WiFi 6 mesh system, coverage up to 4,000 sq ft, parental controls.', 399.99, 'linksys-velop-ax4200', ARRAY['https://example.com/velop-ax4200.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'TP-Link Archer AX73', 'Dual-band WiFi 6 router, OneMesh compatible, HomeShield security.', 199.99, 'tp-link-archer-ax73', ARRAY['https://example.com/archer-ax73.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'ASUS RT-AX82U', 'Dual-band WiFi 6 gaming router, Mobile Game Mode, AiMesh support.', 229.99, 'asus-rt-ax82u', ARRAY['https://example.com/rt-ax82u.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'NETGEAR Nighthawk RAX40', 'Dual-band WiFi 6 router, 4-stream connectivity, Beamforming+.', 149.99, 'netgear-nighthawk-rax40', ARRAY['https://example.com/rax40.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'TP-Link Archer AX55', 'Dual-band WiFi 6 router, HomeShield security, OneMesh ready.', 129.99, 'tp-link-archer-ax55', ARRAY['https://example.com/archer-ax55.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'ASUS RT-AX55', 'Dual-band WiFi 6 router, ASUS AiProtection, MU-MIMO technology.', 129.99, 'asus-rt-ax55', ARRAY['https://example.com/rt-ax55.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'Linksys E8450', 'Dual-band WiFi 6 router, Easy Setup, parental controls.', 149.99, 'linksys-e8450', ARRAY['https://example.com/e8450.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),
(gen_random_uuid(), 'NETGEAR R6700AX', 'Dual-band WiFi 6 router, NETGEAR Armor, Smart Connect.', 99.99, 'netgear-r6700ax', ARRAY['https://example.com/r6700ax.jpg'], 65, 13, (SELECT id FROM sub_categories WHERE name = 'Routers'), now()),


-- Switches 20
(gen_random_uuid(), 'Cisco Catalyst 9300-24T', 'Enterprise-grade Layer 3 switch with 24 ports 10/100/1000BASE-T and 4 SFP+ uplink ports. Features StackWise-480 technology for stacking bandwidth up to 480 Gbps, advanced security with Cisco TrustSec and MACsec encryption, and support for advanced routing protocols. Ideal for campus networks requiring high performance, security and scalability. Includes Cisco DNA Advantage license for advanced automation and analytics capabilities.', 5999.99, 'cisco-catalyst-9300-24t', ARRAY['https://example.com/cat9300.jpg'], 15, 3, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Arista DCS-7280SR3-48YC8', 'High-performance 25GbE/100GbE data center switch with 48x25GbE SFP28 and 8x100GbE QSFP28 ports. Features deep packet buffers, advanced EOS software with CloudVision automation, and support for VXLAN/EVPN. Ultra-low latency of 450ns, comprehensive Layer 2/3 features, and robust telemetry capabilities make it perfect for modern data center deployments requiring high throughput and visibility.', 14999.99, 'arista-7280sr3', ARRAY['https://example.com/dcs7280.jpg'], 10, 2, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Juniper EX4650-48Y', 'Data center switch offering 48x25GbE SFP28 and 8x100GbE QSFP28 ports. Powered by Junos OS with advanced automation capabilities through Juniper EVPN-VXLAN fabric architecture. Features include deep buffers for lossless operation, microsecond latency, and support for Juniper Mist AI for cloud-based operations. Advanced security with MACsec encryption and comprehensive QoS make it ideal for enterprise and cloud deployments.', 12999.99, 'juniper-ex4650', ARRAY['https://example.com/ex4650.jpg'], 12, 2, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'HPE Aruba 8320', 'Advanced data center switch featuring 48x10GbE SFP+ ports and 6x40GbE QSFP+ uplinks. Powered by ArubaOS-CX with advanced automation through Network Analytics Engine. Includes VSX redundancy, advanced Layer 3 features, and REST APIs for programmability. Dynamic micro-segmentation and advanced monitoring capabilities make it perfect for modern enterprise networks requiring high reliability and security.', 9999.99, 'aruba-8320', ARRAY['https://example.com/8320.jpg'], 20, 4, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Dell EMC PowerSwitch S5248F-ON', 'Open networking switch with 48x25GbE SFP28 and 6x100GbE QSFP28+ ports. Supports multiple network operating systems including Dell EMC OS10. Features include advanced Layer 2/3 protocols, VXLAN support, and comprehensive automation capabilities. Hardware-based VXLAN EVPN and advanced telemetry make it ideal for modern data center fabrics requiring flexibility and openness.', 11999.99, 'dell-s5248f', ARRAY['https://example.com/s5248f.jpg'], 15, 3, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Cisco Nexus 93180YC-EX', 'Data center switch offering 48x10/25GbE SFP+ and 6x40/100GbE QSFP28 ports. Features include VXLAN EVPN support, advanced buffer architecture, and comprehensive NX-OS automation capabilities. Designed for high-performance data centers with ultra-low latency requirements and support for Cisco ACI fabric architecture. Includes advanced analytics and telemetry features for deep network visibility.', 16999.99, 'nexus-93180yc', ARRAY['https://example.com/nexus93180.jpg'], 8, 2, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Extreme Networks VSP 7400-48Y', 'Enterprise switch with 48x25GbE SFP28 and 8x100GbE QSFP28 ports. Features Fabric Connect technology for simplified network operations, ExtremeXOS advanced features, and support for Extreme Management Center. Includes advanced security features, comprehensive QoS, and detailed analytics capabilities for network visibility and troubleshooting.', 13999.99, 'extreme-vsp7400', ARRAY['https://example.com/vsp7400.jpg'], 12, 2, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Mellanox SN2010', 'Compact data center switch with 18x25GbE SFP28 and 4x100GbE QSFP28 ports. Features Spectrum ASIC for ultra-low latency, advanced overlay networking support, and comprehensive Layer 2/3 capabilities. Ideal for small to medium data centers requiring high performance and efficiency. Includes advanced monitoring and telemetry features for detailed network visibility.', 7999.99, 'mellanox-sn2010', ARRAY['https://example.com/sn2010.jpg'], 18, 3, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Cisco Catalyst 9200-48P', 'Enterprise access switch with 48x1GbE PoE+ ports and 4x10GbE SFP+ uplinks. Features include advanced security with Cisco TrustSec, simplified operations with Software-Defined Access, and support for advanced QoS and policy enforcement. Includes Cisco DNA Essentials license for basic automation and monitoring capabilities. Perfect for campus network access layer deployments.', 4999.99, 'catalyst-9200', ARRAY['https://example.com/cat9200.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Aruba 6300M', 'Modular access switch with 48x1GbE PoE+ ports and optional uplink modules. Features include VSF stacking, advanced Layer 3 routing, and cloud-based management through Aruba Central. Support for Zero Touch Provisioning and advanced security features make it ideal for enterprise campus networks requiring flexibility and scalability.', 5999.99, 'aruba-6300m', ARRAY['https://example.com/6300m.jpg'], 20, 4, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Juniper EX3400-48P', 'Enterprise access switch providing 48x1GbE PoE+ ports and 4x10GbE SFP+ uplinks. Features Virtual Chassis technology for simplified management, comprehensive security features, and advanced automation capabilities through Junos OS. Includes support for Zero Touch Provisioning and Juniper Mist AI for cloud-based operations.', 4499.99, 'juniper-ex3400', ARRAY['https://example.com/ex3400.jpg'], 22, 4, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'HPE OfficeConnect 1950-48G', 'Smart-managed switch with 48x1GbE ports and 4x10GbE SFP+ uplinks. Features include basic Layer 3 static routing, comprehensive QoS capabilities, and simplified web management interface. Ideal for small to medium businesses requiring reliable network connectivity with essential management features.', 899.99, 'hpe-1950', ARRAY['https://example.com/1950.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'NETGEAR M4300-48X', 'Managed switch offering 48x10GbE ports and 2x40GbE QSFP+ uplinks. Features include non-stop forwarding, comprehensive Layer 2/3 capabilities, and advanced QoS. Includes NETGEAR Insight management for cloud-based monitoring and configuration. Perfect for mid-sized businesses requiring high-performance networking.', 6999.99, 'netgear-m4300', ARRAY['https://example.com/m4300.jpg'], 15, 3, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'TP-Link TL-SG3428X', 'JetStream managed switch with 24x1GbE ports and 4x10GbE SFP+ uplinks. Features include static routing, comprehensive L2/L2+ features, and advanced security capabilities. Web-based management interface and CLI access provide flexible configuration options. Suitable for small business networks requiring essential managed switch features.', 399.99, 'tp-link-sg3428x', ARRAY['https://example.com/sg3428x.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'D-Link DGS-1520-52MP', 'Smart managed switch with 48x1GbE PoE+ ports and 4x10GbE SFP+ uplinks. Features include basic Layer 3 routing, D-Link Green technology for energy efficiency, and comprehensive security features. Supports physical stacking and includes D-Link Network Assistant for simplified management.', 899.99, 'dlink-1520', ARRAY['https://example.com/dgs1520.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Ubiquiti UniFi Switch PRO 48', 'Enterprise switch with 48x1GbE ports and 4x10GbE SFP+ uplinks. Features Layer 2 management through UniFi Controller, 802.3at PoE+ support, and advanced monitoring capabilities. Ideal for UniFi deployments requiring seamless integration with other UniFi networking products.', 1099.99, 'ubiquiti-pro48', ARRAY['https://example.com/uspro48.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Cisco Small Business SG350X-48P', 'Managed switch offering 48x1GbE PoE+ ports and 4x10GbE SFP+ uplinks. Features include advanced QoS, comprehensive security capabilities, and static routing support. Includes Cisco FindIT Network Management for simplified operations. Perfect for small to medium business deployments.', 1299.99, 'cisco-sg350x', ARRAY['https://example.com/sg350x.jpg'], 28, 5, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'ZyXEL XGS2210-52', 'Layer 2+ managed switch with 48x1GbE ports and 4x10GbE SFP+ uplinks. Features include basic Layer 3 static routing, comprehensive VLAN support, and advanced QoS capabilities. Includes ZyXEL One Network utilities for simplified management and configuration.', 799.99, 'zyxel-xgs2210', ARRAY['https://example.com/xgs2210.jpg'], 32, 6, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'Buffalo BS-MP2008', 'Smart managed switch providing 8x2.5GbE ports with Layer 2 management features. Includes basic QoS capabilities, VLAN support, and web-based management interface. Ideal for small office deployments requiring multi-gigabit connectivity for high-performance workstations and servers.', 299.99, 'buffalo-mp2008', ARRAY['https://example.com/mp2008.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),
(gen_random_uuid(), 'MikroTik CRS328-24P-4S+RM', 'Cloud Router Switch with 24x1GbE PoE+ ports and 4x10GbE SFP+ uplinks. Features RouterOS with advanced routing capabilities, comprehensive switching features, and powerful firewall functionality. Includes The Dude Network Monitor for detailed network visibility and management.', 699.99, 'mikrotik-crs328', ARRAY['https://example.com/crs328.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Switches'), now()),



-- SSD 20
(gen_random_uuid(), 'Samsung 990 PRO 2TB', 'PCIe 4.0 NVMe SSD with sequential reads up to 7,450 MB/s, writes up to 6,900 MB/s. Samsung V-NAND with optimized controller for gaming and high-end PC workloads. Advanced thermal control and 5-year warranty.', 169.99, 'samsung-990-pro-2tb', ARRAY['https://example.com/990pro.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'WD_BLACK SN850X 2TB', 'PCIe Gen4 gaming SSD with reads up to 7,300 MB/s. Features Game Mode 2.0 and proprietary WD_BLACK Dashboard. Optimized for PS5, includes heatsink option.', 179.99, 'wd-black-sn850x-2tb', ARRAY['https://example.com/sn850x.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Crucial T700 2TB', 'PCIe Gen5 NVMe SSD delivering up to 12,400 MB/s reads. Micron advanced 232-layer TLC NAND, hardware-based encryption, and advanced thermal management.', 249.99, 'crucial-t700-2tb', ARRAY['https://example.com/t700.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'SK hynix Platinum P41 2TB', 'PCIe 4.0 NVMe SSD with 7,000 MB/s reads. Features proprietary SK hynix NAND and controller. Advanced power efficiency and 5-year warranty included.', 159.99, 'sk-hynix-p41-2tb', ARRAY['https://example.com/p41.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Corsair MP600 PRO XT 2TB', 'PCIe Gen4 SSD with integrated heatsink. Up to 7,100 MB/s reads, custom Phison E18 controller, and Corsair iCUE compatibility.', 189.99, 'corsair-mp600-pro-xt-2tb', ARRAY['https://example.com/mp600xt.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Seagate FireCuda 530 2TB', 'High-performance PCIe Gen4 gaming SSD. Features E18 controller, 3D TLC NAND, and optional heatsink. PlayStation 5 compatible.', 199.99, 'seagate-firecuda-530-2tb', ARRAY['https://example.com/fc530.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'ADATA XPG GAMMIX S70 Blade 2TB', 'PCIe 4.0 SSD with slim graphene heatsink. 7,400 MB/s reads, PS5 compatible, and LDPC error correction.', 169.99, 'adata-s70-blade-2tb', ARRAY['https://example.com/s70blade.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Sabrent Rocket 4 Plus 2TB', 'PCIe 4.0 NVMe SSD delivering 7,100 MB/s reads. Phison E18 controller, advanced wear leveling, and optional heatsink design.', 179.99, 'sabrent-rocket4-plus-2tb', ARRAY['https://example.com/rocket4plus.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Crucial P5 Plus 2TB', 'PCIe Gen4 SSD with Micron advanced 176L 3D NAND. Features dynamic write acceleration and adaptive thermal protection.', 149.99, 'crucial-p5-plus-2tb', ARRAY['https://example.com/p5plus.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Samsung 870 EVO 2TB', 'SATA SSD with 560 MB/s reads. Features Samsung MKX controller, V-NAND, and proven reliability for mainstream PCs.', 139.99, 'samsung-870-evo-2tb', ARRAY['https://example.com/870evo.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'WD Blue SN570 1TB', 'PCIe Gen3 NVMe SSD for creative workflows. Up to 3,500 MB/s reads, WD F.I.T Lab certified, and low power consumption.', 79.99, 'wd-blue-sn570-1tb', ARRAY['https://example.com/sn570.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Kingston KC3000 2TB', 'PCIe 4.0 NVMe SSD with Phison E18 controller. 7,000 MB/s reads and advanced low-density parity check.', 169.99, 'kingston-kc3000-2tb', ARRAY['https://example.com/kc3000.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Crucial MX500 2TB', 'SATA SSD with 560 MB/s reads. Features dynamic write acceleration and integrated power loss immunity.', 129.99, 'crucial-mx500-2tb', ARRAY['https://example.com/mx500.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'TeamGroup T-Force Cardea Z44L 1TB', 'PCIe 4.0 SSD optimized for laptops. Low power consumption, high efficiency, and thermal throttling protection.', 89.99, 'teamgroup-z44l-1tb', ARRAY['https://example.com/z44l.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Silicon Power UD90 2TB', 'PCIe 4.0 NVMe SSD with 3D NAND flash. Features SLC caching and LDPC error correction technology.', 149.99, 'silicon-power-ud90-2tb', ARRAY['https://example.com/ud90.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Patriot P400 2TB', 'PCIe 4.0 SSD with InnoGrit IG5220 controller. Offers 7,000 MB/s reads and advanced thermal management.', 159.99, 'patriot-p400-2tb', ARRAY['https://example.com/p400.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Mushkin Pilot-E 2TB', 'PCIe 3.0 NVMe SSD with Silicon Motion SM2262EN controller. Features end-to-end data protection and power management.', 139.99, 'mushkin-pilot-e-2tb', ARRAY['https://example.com/pilote.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'PNY XLR8 CS3140 2TB', 'PCIe Gen4 SSD with optional heatsink. Delivers 7,500 MB/s reads and advanced cooling solutions.', 179.99, 'pny-cs3140-2tb', ARRAY['https://example.com/cs3140.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Inland Performance Plus 2TB', 'PCIe Gen4 NVMe SSD with Phison E18 controller. Features thermal monitoring and PS5 compatibility.', 169.99, 'inland-performance-plus-2tb', ARRAY['https://example.com/perfplus.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),
(gen_random_uuid(), 'Corsair Force MP510 2TB', 'PCIe 3.0 NVMe SSD with Phison E12 controller. Offers endurance up to 3,120 TBW and AES 256-bit encryption.', 149.99, 'corsair-mp510-2tb', ARRAY['https://example.com/mp510.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'SSD'), now()),



-- Processors 20
(gen_random_uuid(), 'AMD Ryzen 9 7950X3D', 'Flagship AM5 processor featuring revolutionary 3D V-Cache technology. 16 cores, 32 threads with up to 5.7GHz boost clock. Features 144MB total cache (128MB L3 + 16MB L2), PCIe 5.0 support, and DDR5 memory compatibility. Built on TSMC 5nm process. Integrated Radeon graphics with 2 compute units. 120W base TDP with AMD PBO and Curve Optimizer support. Ideal for gaming and content creation with class-leading gaming performance and exceptional multi-threaded capabilities.', 699.99, 'amd-7950x3d', ARRAY['https://example.com/7950x3d.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i9-14900K', '24-core (8P+16E) flagship processor for LGA 1700 socket. Features up to 6.0GHz P-core boost with Intel Thermal Velocity Boost, 36MB Smart Cache, and integrated UHD 770 graphics. Supports DDR5-5600 and PCIe 5.0. Advanced features include Intel Thread Director, Intel Speed Optimizer, and Extreme Tuning Utility. Enhanced overclocking capabilities with unlocked multiplier. 125W base TDP with up to 253W turbo power.', 589.99, 'intel-14900k', ARRAY['https://example.com/14900k.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 7 7800X3D', 'Gaming-focused AM5 processor with 3D V-Cache technology. 8 cores, 16 threads with up to 5.0GHz boost. Features 104MB total cache (96MB L3 + 8MB L2). Built on 5nm process with PCIe 5.0 and DDR5 support. Includes AMD EXPO memory overclocking profiles and Precision Boost Overdrive 2. Integrated RDNA 2 graphics with excellent 1080p gaming capabilities. 120W TDP with efficient power management.', 449.99, 'amd-7800x3d', ARRAY['https://example.com/7800x3d.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i7-14700K', '20-core (8P+12E) processor combining high performance and efficiency. Features 5.6GHz P-core boost, 33MB Smart Cache, and Intel UHD 770 graphics. Supports DDR5-5600 memory and PCIe 5.0. Includes Intel Adaptive Boost Technology and enhanced Intel Thread Director. Unlocked for overclocking with Intel XTU support. 125W base TDP with advanced power management features.', 419.99, 'intel-14700k', ARRAY['https://example.com/14700k.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 9 7900X', 'High-performance AM5 processor with 12 cores and 24 threads. Up to 5.6GHz boost clock with 76MB total cache. Built on TSMC 5nm process with support for PCIe 5.0 and DDR5-5200 memory. Features AMD Precision Boost 2, Precision Boost Overdrive, and Curve Optimizer. Integrated RDNA 2 graphics architecture. 170W TDP with extensive overclocking capabilities.', 449.99, 'amd-7900x', ARRAY['https://example.com/7900x.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i5-14600K', '14-core (6P+8E) mainstream gaming processor. Features up to 5.3GHz P-core boost, 24MB Smart Cache, and Intel UHD 770 graphics. Supports DDR5-5600 and PCIe 5.0. Includes Intel Turbo Boost Max 3.0 and Intel Thread Director technology. Unlocked multiplier for overclocking enthusiasts. 125W base TDP with efficient hybrid architecture.', 319.99, 'intel-14600k', ARRAY['https://example.com/14600k.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 7 7700X', 'Balanced AM5 processor with 8 cores and 16 threads. Features up to 5.4GHz boost clock and 40MB total cache. Supports PCIe 5.0 and DDR5 memory. Built on advanced 5nm process with integrated RDNA 2 graphics. Includes AMD Precision Boost 2 and Curve Optimizer support. 105W TDP with excellent gaming and productivity performance.', 349.99, 'amd-7700x', ARRAY['https://example.com/7700x.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i9-13900KS', 'Special edition 24-core (8P+16E) processor reaching 6.0GHz out of the box. Features 36MB Smart Cache and UHD 770 graphics. Supports DDR5-5600 and PCIe 5.0. Includes advanced features like Intel Thermal Velocity Boost and Adaptive Boost Technology. Unlocked for extreme overclocking. 150W base TDP with up to 253W turbo power.', 699.99, 'intel-13900ks', ARRAY['https://example.com/13900ks.jpg'], 20, 4, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 5 7600X', 'Mainstream AM5 processor with 6 cores and 12 threads. Up to 5.3GHz boost clock with 38MB total cache. Features PCIe 5.0 support and DDR5 memory compatibility. Built on 5nm process with integrated RDNA 2 graphics. Includes AMD Precision Boost 2 and extensive overclocking features. 105W TDP with excellent gaming value.', 249.99, 'amd-7600x', ARRAY['https://example.com/7600x.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i7-13700K', '16-core (8P+8E) processor for high-performance computing. Features 5.4GHz P-core boost and 30MB Smart Cache. Supports DDR5-5600 and PCIe 5.0. Includes Intel Thread Director and Turbo Boost Max 3.0. Unlocked multiplier for overclocking. 125W base TDP with hybrid architecture for optimal performance scaling.', 389.99, 'intel-13700k', ARRAY['https://example.com/13700k.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 7 5800X3D', 'First generation 3D V-Cache gaming processor for AM4 platform. 8 cores, 16 threads with 96MB L3 cache. Features up to 4.5GHz boost clock and PCIe 4.0 support. Built on 7nm process with advanced gaming optimization. Includes Precision Boost 2 and extensive memory compatibility. 105W TDP with exceptional gaming performance.', 329.99, 'amd-5800x3d', ARRAY['https://example.com/5800x3d.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i5-13600K', '14-core (6P+8E) mainstream processor with excellent gaming capabilities. Features 5.1GHz P-core boost and 24MB Smart Cache. Supports DDR5-5600 and PCIe 5.0. Includes Intel Thread Director and Smart Memory Access. Unlocked for overclocking with Intel XTU support. 125W base TDP with efficient hybrid design.', 289.99, 'intel-13600k', ARRAY['https://example.com/13600k.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 9 5950X', 'High-end AM4 processor with 16 cores and 32 threads. Features up to 4.9GHz boost clock and 72MB total cache. Supports PCIe 4.0 and extensive memory compatibility. Built on 7nm process with class-leading multi-threaded performance. Includes Precision Boost 2 and Curve Optimizer. 105W TDP with exceptional productivity capabilities.', 549.99, 'amd-5950x', ARRAY['https://example.com/5950x.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i3-14100', 'Entry-level 4-core, 8-thread processor for LGA 1700 socket. Features 4.7GHz boost clock and 12MB Smart Cache. Includes integrated UHD 730 graphics and supports DDR5-4800. Built with Intel 7 process technology. Excellent choice for budget gaming and productivity builds. 60W base TDP with efficient operation.', 129.99, 'intel-14100', ARRAY['https://example.com/14100.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 5 5600X', 'Popular AM4 processor with 6 cores and 12 threads. Features up to 4.6GHz boost clock and 35MB total cache. Supports PCIe 4.0 with excellent gaming performance. Built on 7nm process with included Wraith Stealth cooler. Includes Precision Boost 2 and extensive memory support. 65W TDP with great value proposition.', 199.99, 'amd-5600x', ARRAY['https://example.com/5600x.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i9-12900KS', 'Special edition 12th gen processor with 16 cores (8P+8E). Features 5.5GHz P-core boost and 30MB Smart Cache. Supports DDR5-4800 and PCIe 5.0. Includes Intel Thread Director and Thermal Velocity Boost. Unlocked for overclocking. 150W base TDP with advanced power management.', 599.99, 'intel-12900ks', ARRAY['https://example.com/12900ks.jpg'], 20, 4, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 7 5700G', 'APU combining 8 cores, 16 threads with powerful integrated Vega graphics. Features up to 4.6GHz boost and 20MB cache. Excellent for gaming without discrete GPU. Built on 7nm process with included Wraith Stealth cooler. Supports PCIe 3.0 with extensive memory compatibility. 65W TDP ideal for compact builds.', 259.99, 'amd-5700g', ARRAY['https://example.com/5700g.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i7-12700K', '12-core (8P+4E) processor for high-performance computing. Features 5.0GHz P-core boost and 25MB Smart Cache. Supports DDR5-4800 and PCIe 5.0. Includes Intel Thread Director and Turbo Boost Max 3.0. Unlocked for overclocking. 125W base TDP with hybrid architecture benefits.', 379.99, 'intel-12700k', ARRAY['https://example.com/12700k.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'AMD Ryzen 5 5600G', 'Value APU with 6 cores, 12 threads and integrated Vega graphics. Features up to 4.4GHz boost and 19MB cache. Perfect for budget gaming builds without discrete GPU. Built on 7nm process with included cooler. Supports PCIe 3.0 and extensive memory compatibility. 65W TDP with excellent efficiency.', 189.99, 'amd-5600g', ARRAY['https://example.com/5600g.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),
(gen_random_uuid(), 'Intel Core i5-12600K', '10-core (6P+4E) mainstream gaming processor. Features 4.9GHz P-core boost and 20MB Smart Cache. Supports DDR5-4800 and PCIe 5.0. Includes Intel Thread Director and Smart Memory Access. Unlocked for overclocking. 125W base TDP with efficient hybrid design.', 279.99, 'intel-12600k', ARRAY['https://example.com/12600k.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Processors'), now()),



-- Graphics Cards 20
(gen_random_uuid(), 'NVIDIA GeForce RTX 4090', 'The GeForce RTX 4090 is powered by the Ada Lovelace architecture and offers unparalleled gaming and creative performance. Featuring 24GB of GDDR6X memory and advanced technologies like DLSS 3 and ray tracing, it delivers an exceptional experience for gamers and content creators alike.', 1599.99, 'nvidia-geforce-rtx-4090', ARRAY['https://example.com/rtx-4090.jpg'], 20, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
(gen_random_uuid(), 'AMD Radeon RX 7900 XTX', 'The Radeon RX 7900 XTX is AMDs flagship graphics card, built on the RDNA 3 architecture. With 24GB of GDDR6 memory and support for AMDs FidelityFX Super Resolution (FSR), this card is designed to deliver top-tier performance in 4K gaming and beyond.', 999.99, 'amd-radeon-rx-7900-xtx', ARRAY['https://example.com/rx-7900-xtx.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
(gen_random_uuid(), 'NVIDIA GeForce RTX 4080', 'The GeForce RTX 4080 offers outstanding performance with 16GB of GDDR6X memory. Featuring the latest NVIDIA Ada Lovelace architecture, it is designed for 4K gaming and intensive creative workflows, offering incredible power, ray tracing, and AI-enhanced features.', 1199.99, 'nvidia-geforce-rtx-4080', ARRAY['https://example.com/rtx-4080.jpg'], 30, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
(gen_random_uuid(), 'AMD Radeon RX 7800 XT', 'The RX 7800 XT offers excellent value and performance for 1440p and 4K gaming. Powered by AMDs RDNA 3 architecture and equipped with 16GB of GDDR6 memory, it combines high frame rates with ray tracing support for next-gen gaming experiences.', 649.99, 'amd-radeon-rx-7800-xt', ARRAY['https://example.com/rx-7800-xt.jpg'], 40, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'NVIDIA GeForce RTX 4070 Ti', 'The GeForce RTX 4070 Ti is the perfect choice for gamers seeking high-end performance without breaking the bank. With 12GB of GDDR6X memory and the power of the Ada Lovelace architecture, it excels in both gaming and content creation.', 799.99, 'nvidia-geforce-rtx-4070-ti', ARRAY['https://example.com/rtx-4070-ti.jpg'], 35, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'NVIDIA GeForce RTX 3060 Ti', 'The GeForce RTX 3060 Ti offers incredible performance for 1080p and 1440p gaming. Featuring 8GB of GDDR6 memory, it is an excellent choice for gamers looking for powerful performance at an affordable price point.', 399.99, 'nvidia-geforce-rtx-3060-ti', ARRAY['https://example.com/rtx-3060-ti.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'AMD Radeon RX 6700 XT', 'The RX 6700 XT is a powerful 1440p graphics card built on the RDNA 2 architecture. With 12GB of GDDR6 memory and support for ray tracing, it provides excellent performance and value for gamers looking for solid 1440p performance.', 479.99, 'amd-radeon-rx-6700-xt', ARRAY['https://example.com/rx-6700-xt.jpg'], 45, 10, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'NVIDIA GeForce RTX 3050', 'The GeForce RTX 3050 offers solid performance for entry-level gaming. With 8GB of GDDR6 memory and support for ray tracing, this card is perfect for gamers looking to experience NVIDIA’s latest technologies without breaking the bank.', 249.99, 'nvidia-geforce-rtx-3050', ARRAY['https://example.com/rtx-3050.jpg'], 60, 10, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'AMD Radeon RX 6600 XT', 'The RX 6600 XT offers fantastic performance for 1080p gaming, featuring 8GB of GDDR6 memory. Powered by AMDs RDNA 2 architecture, it provides excellent power efficiency and high frame rates in modern titles.', 379.99, 'amd-radeon-rx-6600-xt', ARRAY['https://example.com/rx-6600-xt.jpg'], 40, 10, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'NVIDIA GeForce GTX 1660 Ti', 'The GTX 1660 Ti delivers great performance at an affordable price, with 6GB of GDDR5 memory. Ideal for 1080p gaming, it offers solid frame rates in modern games without the need for a high-end GPU.', 249.99, 'nvidia-geforce-gtx-1660-ti', ARRAY['https://example.com/gtx-1660-ti.jpg'], 70, 10, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'NVIDIA GeForce GTX 1650', 'The GTX 1650 is an entry-level graphics card with 4GB of GDDR5 memory. Perfect for casual gamers and those who want to upgrade from integrated graphics, it provides solid 1080p performance in less demanding titles.', 179.99, 'nvidia-geforce-gtx-1650', ARRAY['https://example.com/gtx-1650.jpg'], 100, 15, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'ASUS TUF Gaming RTX 3060', 'The ASUS TUF Gaming RTX 3060 is designed for gamers who demand reliability and performance. With 12GB of GDDR6 memory and support for ray tracing, it provides excellent 1080p and 1440p gaming performance.', 499.99, 'asus-tuf-gaming-rtx-3060', ARRAY['https://example.com/tuf-rtx-3060.jpg'], 30, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'EVGA GeForce RTX 3070 XC3 Ultra', 'The EVGA GeForce RTX 3070 XC3 Ultra delivers exceptional 1440p and 4K gaming performance. With 8GB of GDDR6 memory and advanced cooling, it provides smooth frame rates and is built for gamers who need high-performance graphics.', 549.99, 'evga-geforce-rtx-3070-xc3-ultra', ARRAY['https://example.com/evga-rtx-3070.jpg'], 30, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'MSI GeForce RTX 3080 Gaming X Trio', 'The MSI GeForce RTX 3080 Gaming X Trio offers powerful performance with 10GB of GDDR6X memory. Featuring advanced cooling solutions and ray tracing capabilities, it delivers top-tier performance for 4K gaming and content creation.', 899.99, 'msi-geforce-rtx-3080', ARRAY['https://example.com/msi-rtx-3080.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'Gigabyte AORUS GeForce RTX 3070 Master', 'The Gigabyte AORUS GeForce RTX 3070 Master offers excellent performance for 1440p gaming. With 8GB of GDDR6 memory and customizable RGB lighting, it provides both top-notch gaming and aesthetics.', 599.99, 'gigabyte-aorus-rtx-3070-master', ARRAY['https://example.com/gigabyte-rtx-3070.jpg'], 30, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'ZOTAC Gaming GeForce RTX 3060 Ti Twin Edge', 'The ZOTAC Gaming GeForce RTX 3060 Ti Twin Edge delivers smooth performance at 1440p with 8GB of GDDR6 memory. Built with dual-fan cooling and support for ray tracing, it is an excellent value for gamers looking for a powerful card at a reasonable price.', 429.99, 'zotac-geforce-rtx-3060-ti-twin-edge', ARRAY['https://example.com/zotac-rtx-3060-ti.jpg'], 40, 10, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'PNY GeForce RTX 4080 XLR8', 'The PNY GeForce RTX 4080 XLR8 combines cutting-edge performance with stunning visuals. Featuring 16GB of GDDR6X memory and powered by the Ada Lovelace architecture, it is perfect for 4K gaming, VR, and demanding creative tasks like 3D rendering and video editing.', 1299.99, 'pny-geforce-rtx-4080-xlr8', ARRAY['https://example.com/pny-rtx-4080.jpg'], 30, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'EVGA GeForce GTX 1650 SC Ultra', 'The EVGA GeForce GTX 1650 SC Ultra offers great performance for budget gamers. With 4GB of GDDR5 memory, it provides a fantastic upgrade from integrated graphics, enabling smooth gaming in many modern titles at 1080p resolution.', 159.99, 'evga-geforce-gtx-1650-sc-ultra', ARRAY['https://example.com/evga-gtx-1650.jpg'], 80, 15, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'XFX Radeon RX 5700 XT Thicc III Ultra', 'The XFX Radeon RX 5700 XT Thicc III Ultra offers excellent 1440p performance with 8GB of GDDR6 memory. Powered by AMDs RDNA architecture, this card delivers a great gaming experience with support for high frame rates and ray tracing at a competitive price.', 399.99, 'xfx-radeon-rx-5700-xt-thicc-iii-ultra', ARRAY['https://example.com/xfx-rx-5700-xt.jpg'], 40, 10, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'MSI GeForce GTX 1660 Super Ventus XS OC', 'The MSI GeForce GTX 1660 Super Ventus XS OC is perfect for budget-conscious gamers looking for 1080p gaming performance. Equipped with 6GB of GDDR5 memory, this card offers a great balance of price and performance for gamers who want a solid gaming experience without breaking the bank.', 229.99, 'msi-geforce-gtx-1660-super-ventus-xs-oc', ARRAY['https://example.com/msi-gtx-1660-super.jpg'], 50, 15, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'Gigabyte Radeon RX 6800 XT Gaming OC', 'The Gigabyte Radeon RX 6800 XT Gaming OC delivers excellent performance for 4K gaming, featuring 16GB of GDDR6 memory and powered by AMDs RDNA 2 architecture. This card offers outstanding frame rates, ray tracing support, and is perfect for next-gen gaming experiences.', 699.99, 'gigabyte-radeon-rx-6800-xt-gaming-oc', ARRAY['https://example.com/gigabyte-rx-6800-xt.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'ASUS ROG Strix GeForce RTX 3090', 'The ASUS ROG Strix GeForce RTX 3090 is the ultimate graphics card for enthusiasts who demand extreme performance. With 24GB of GDDR6X memory and powered by the Ampere architecture, it delivers outstanding performance for 4K gaming, 3D rendering, and AI workloads.', 1999.99, 'asus-rog-strix-geforce-rtx-3090', ARRAY['https://example.com/rog-rtx-3090.jpg'], 15, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'ZOTAC Gaming GeForce GTX 1660', 'The ZOTAC Gaming GeForce GTX 1660 is an excellent choice for 1080p gaming with 6GB of GDDR5 memory. It offers solid performance in most modern titles, allowing for smooth gameplay without breaking the bank.', 199.99, 'zotac-geforce-gtx-1660', ARRAY['https://example.com/zotac-gtx-1660.jpg'], 100, 15, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),
  (gen_random_uuid(), 'PowerColor Red Devil Radeon RX 6900 XT', 'The PowerColor Red Devil Radeon RX 6900 XT offers high-end performance for 4K gaming and demanding workloads. With 16GB of GDDR6 memory and RDNA 2 architecture, it provides excellent ray tracing performance and smooth gameplay at ultra settings.', 1499.99, 'powercolor-red-devil-radeon-rx-6900-xt', ARRAY['https://example.com/red-devil-rx-6900-xt.jpg'], 20, 5, (SELECT id FROM sub_categories WHERE name = 'Graphics Cards'), now()),



-- Keyboards 20
(gen_random_uuid(), 'Logitech G Pro X Mechanical Gaming Keyboard', 'Professional-grade mechanical gaming keyboard featuring hot-swappable switches for customizable typing experience. Features RGB per-key lighting, programmable macros, and compact tenkeyless design. Includes detachable USB-C cable, premium double-shot PBT keycaps, and advanced GX Blue Clicky switches for tactile feedback. Three-level angle adjustment and rubber feet ensure stability during intense gaming sessions.', 149.99, 'logitech-g-pro-x-mechanical', ARRAY['https://example.com/logitech-g-pro-x.jpg'], 75, 15, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Razer BlackWidow V3 Pro', 'Premium wireless mechanical gaming keyboard with Razer Green switches for clicky feedback. Features multi-device Bluetooth connectivity, 2.4GHz HyperSpeed wireless technology, and USB-C wired option. Includes plush leatherette wrist rest, dedicated media controls, and multi-function digital dial. Military-grade aluminum construction with doubleshot ABS keycaps and Razer Chroma RGB with 16.8 million color options.', 229.99, 'razer-blackwidow-v3-pro', ARRAY['https://example.com/razer-blackwidow-v3-pro.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Corsair K100 RGB Optical-Mechanical', 'Flagship mechanical gaming keyboard featuring Corsair OPX optical-mechanical switches with 1.0mm actuation. Includes iCUE control wheel, 44-zone RGB edge lighting, and 6 dedicated macro keys. Aircraft-grade aluminum frame, PBT double-shot keycaps, and detachable palm rest. 4000Hz hyper-polling and zero debounce delay for ultimate gaming performance. Compatible with Elgato Stream Deck software.', 249.99, 'corsair-k100-rgb', ARRAY['https://example.com/corsair-k100.jpg'], 45, 10, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Ducky One 3 SF RGB', 'Premium 65% mechanical keyboard with hot-swappable Cherry MX switches. Features QUACK Mechanics design with dual-layer PCB and EVA foam dampening. Double-shot PBT keycaps with side-printed functions, RGB per-key backlighting, and dual-tone colorway options. Includes sound-dampening foam and upgraded stabilizers for premium typing experience.', 129.99, 'ducky-one-3-sf-rgb', ARRAY['https://example.com/ducky-one-3.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Keychron Q1 Pro', 'Customizable 75% wireless mechanical keyboard with QMK/VIA support. Features CNC aluminum case, gasket mount design, and south-facing RGB. Hot-swappable PCB compatible with all MX-style switches, screw-in stabilizers, and double-shot PBT keycaps. Includes sound-absorbing foam and rotary knob. Bluetooth 5.1 with up to 3 device connections and USB-C wired mode.', 199.99, 'keychron-q1-pro', ARRAY['https://example.com/keychron-q1-pro.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'SteelSeries Apex Pro TKL', 'Tenkeyless mechanical gaming keyboard with adjustable OmniPoint 2.0 switches. Features OLED smart display, aircraft-grade aluminum frame, and per-key RGB illumination. Magnetic wrist rest, dedicated multimedia controls, and USB passthrough. Adjustable actuation from 0.2mm to 3.8mm for customizable gaming performance. Five onboard profiles for portable settings.', 189.99, 'steelseries-apex-pro-tkl', ARRAY['https://example.com/apex-pro-tkl.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Das Keyboard 4 Professional', 'Premium mechanical keyboard for professionals featuring Cherry MX Brown switches. Full N-key rollover, dedicated media controls with oversized volume knob, and two-port USB 3.0 hub. Anodized aluminum top panel, laser-etched keycaps, and elevated typing angle with magnetic footbar ruler. Built for durability with gold-plated switches rated for 50 million keystrokes.', 169.99, 'das-keyboard-4-pro', ARRAY['https://example.com/das-keyboard-4.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'ASUS ROG Azoth', 'Premium 75% wireless gaming keyboard with tri-mode connectivity. Features ROG NX mechanical switches, silicon gasket mount design, and three-layer dampening. OLED display, hot-swappable PCB, and PBT double-shot keycaps. Includes switch lube kit, keycap puller, and switch puller. 2.4GHz SpeedNova wireless technology for gaming-grade response times.', 249.99, 'asus-rog-azoth', ARRAY['https://example.com/rog-azoth.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Leopold FC900R PD', 'Professional full-size mechanical keyboard with Cherry MX Silent Red switches. Double-shot PBT keycaps with side-printed legends, step sculpture 2 profile. Dual-layer PCB with sound-dampening material, no RGB lighting for distraction-free typing. Includes USB-C detachable cable and DIP switches for layout customization.', 139.99, 'leopold-fc900r-pd', ARRAY['https://example.com/leopold-fc900r.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Logitech MX Keys Advanced', 'Premium wireless productivity keyboard with Perfect Stroke typing technology. Smart illumination with proximity sensors, USB-C quick charging, and multi-device connectivity. Spherically-dished keys for better typing accuracy, Flow cross-computer control, and smart backlighting. Compatible with Windows, macOS, Linux, iOS, and Android.', 119.99, 'logitech-mx-keys', ARRAY['https://example.com/mx-keys.jpg'], 80, 16, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'GMMK Pro', 'Customizable 75% mechanical keyboard with rotary knob. Features gasket-mounted plate, aluminum case, and south-facing PCB. Hot-swappable switches, screw-in stabilizers, and RGB backlighting. Includes sound-dampening foam and programmable QMK/VIA firmware. Available in black slate and white ice finishes.', 169.99, 'gmmk-pro', ARRAY['https://example.com/gmmk-pro.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Varmilo VA87M', 'Tenkeyless mechanical keyboard with Cherry MX Blue switches. Features dye-sublimated PBT keycaps with unique artwork designs. Steel plate mounting, dual-layer PCB, and white LED backlighting. Mini-USB detachable cable and adjustable rubber feet. Available in various themed designs with matching accessories.', 139.99, 'varmilo-va87m', ARRAY['https://example.com/varmilo-va87m.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Nuphy Air75', 'Ultra-slim wireless mechanical keyboard with low-profile Gateron switches. Features double-shot PBT keycaps, RGB backlighting, and aluminum frame. Triple connectivity with Bluetooth 5.0, 2.4GHz wireless, and USB-C wired modes. Compatible with both Mac and Windows, includes magnetic feet for angle adjustment.', 129.99, 'nuphy-air75', ARRAY['https://example.com/nuphy-air75.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Microsoft Surface Keyboard', 'Premium slim wireless keyboard with aluminum top case. Features optimized key travel, exceptional stability, and Bluetooth 4.0 connectivity. Integrated number pad, ambient light sensor, and compatibility with Windows, Android, and iOS. Up to 12 months battery life with two AAA alkaline batteries.', 99.99, 'microsoft-surface-keyboard', ARRAY['https://example.com/surface-keyboard.jpg'], 65, 13, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Drop CTRL', 'Hot-swappable TKL mechanical keyboard with aluminum frame. Features dual USB-C connectors, per-key RGB backlighting, and south-facing switches. Includes magnetic feet, stabilizer inserts, and QMK firmware support. Compatible with Cherry MX-style switches and custom keycap sets.', 189.99, 'drop-ctrl', ARRAY['https://example.com/drop-ctrl.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Happy Hacking Keyboard Professional 3', 'Professional 60% keyboard with Topre electrocapacitive switches. Features USB-C connectivity, DIP switches for customization, and silent key operation. Includes both printed and blank PBT keycaps, keymap customization tool, and dual Bluetooth profiles. Made in Japan with exceptional build quality.', 299.99, 'hhkb-pro-3', ARRAY['https://example.com/hhkb-pro-3.jpg'], 20, 4, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Corsair K70 RGB PRO', 'Full-size mechanical gaming keyboard with Cherry MX Speed Silver switches. Features AXON hyper-processing technology, tournament switch, and per-key RGB backlighting. Includes detachable USB-C cable, magnetic palm rest, and dedicated media controls. Aircraft-grade aluminum frame and iCUE software integration.', 169.99, 'corsair-k70-rgb-pro', ARRAY['https://example.com/k70-rgb-pro.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Razer Huntsman V2 Analog', 'Premium gaming keyboard with analog optical switches. Features adjustable actuation points, dual-step actuation, and doubleshot PBT keycaps. Multi-function digital dial, media keys, and USB 3.0 passthrough. Includes plush leatherette wrist rest and Razer Chroma RGB integration.', 249.99, 'razer-huntsman-v2-analog', ARRAY['https://example.com/huntsman-v2-analog.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Anne Pro 2', 'Compact 60% wireless mechanical keyboard with Gateron Brown switches. Features full RGB backlighting, PBT keycaps, and dual Bluetooth/USB-C connectivity. Programmable tap layer, macro support, and custom firmware. Available in white or black cases with various switch options.', 89.99, 'anne-pro-2', ARRAY['https://example.com/anne-pro-2.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),

(gen_random_uuid(), 'Realforce R2 PFU Limited Edition', 'Professional electrostatic capacitive keyboard with variable actuation points. Features Topre switches, PBT keycaps, and silenced operation. Dip switches for customization, stepped Caps Lock, and built-in keyboard stabilizers. Made in Japan with exceptional quality control.', 349.99, 'realforce-r2-pfu', ARRAY['https://example.com/realforce-r2.jpg'], 15, 3, (SELECT id FROM sub_categories WHERE name = 'Keyboards'), now()),




-- Mice 20
(gen_random_uuid(), 'Logitech G Pro X Superlight', 'Professional-grade ultra-lightweight wireless gaming mouse weighing less than 63 grams. Features HERO 25K sensor with 25,600 DPI, zero-additive PTFE feet for smooth gliding, and up to 70 hours of battery life. Advanced LIGHTSPEED wireless technology provides pro-grade 1ms response time. Zero-compromise design with 5 programmable buttons, built-in memory, and refined shape optimized for esports performance. Available in black and white colorways.', 149.99, 'logitech-g-pro-x-superlight', ARRAY['https://example.com/g-pro-superlight.jpg'], 80, 16, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Razer Viper V2 Pro', 'Ultra-lightweight wireless esports mouse featuring Focus Pro 30K optical sensor and Gen-3 optical switches. Weighs only 58 grams with all-new battery technology. Features hybrid on-board and cloud storage, 90 million click lifespan, and up to 80 hours battery life. Includes pre-cut grip tape, wireless USB dongle, and Speedflex USB-C charging cable. Enhanced with AI functionality for improved tracking accuracy and smart features.', 149.99, 'razer-viper-v2-pro', ARRAY['https://example.com/viper-v2-pro.jpg'], 65, 13, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Logitech MX Master 3S', 'Advanced wireless mouse for productivity featuring quiet clicks and 8,000 DPI track-anywhere sensor. Electromagnetic MagSpeed scrolling with precision mode, thumb wheel for horizontal navigation, and ergonomic design. Features USB-C quick charging, Flow cross-computer control, and app-specific customizations. Connects via Bluetooth or included USB receiver with up to 70 days battery life. Compatible with Windows, macOS, Linux, and iPadOS.', 99.99, 'logitech-mx-master-3s', ARRAY['https://example.com/mx-master-3s.jpg'], 90, 18, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Zowie EC2-C', 'Professional gaming mouse with ergonomic right-handed design and 3360 sensor. Features adjustable report rate up to 1000Hz, plug-and-play functionality with no software required. 24-step scroll wheel, flexible paracord cable, and raised sensor position for enhanced tracking. Available in different sizes for optimal grip comfort. Preferred choice among professional FPS players.', 69.99, 'zowie-ec2-c', ARRAY['https://example.com/zowie-ec2-c.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Pulsar X2 Wireless', 'Ultra-lightweight symmetric wireless gaming mouse weighing 51 grams. Features PAW3395 sensor with 26K DPI, Kailh GM 8.0 switches, and pure PTFE skates. Advanced 2.4GHz wireless technology with up to 70 hours battery life. Includes grip tape, receiver adapter, and USB-C charging cable. Available in mini size option for smaller hands.', 99.99, 'pulsar-x2-wireless', ARRAY['https://example.com/pulsar-x2.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Corsair Scimitar RGB Elite', 'Advanced MMO/MOBA gaming mouse with 12 programmable side buttons and patent-pending control system. Features 18,000 DPI optical sensor, customizable button tensions, and aluminum frame construction. Includes on-the-fly DPI adjustments, hardware macro playback, and dynamic RGB lighting zones. Enhanced with Omron switches rated for 50 million clicks and custom weight tuning system.', 79.99, 'corsair-scimitar-rgb-elite', ARRAY['https://example.com/scimitar-elite.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Microsoft Surface Precision Mouse', 'Premium bluetooth mouse designed for productivity featuring customizable buttons and SmartWheel scrolling technology. Machined aluminum scroll wheel, side buttons for navigation, and ergonomic design for all-day comfort. Connects to up to three devices with seamless switching. Features customizable speeds and button mapping through Microsoft Mouse and Keyboard Center.', 99.99, 'microsoft-surface-precision', ARRAY['https://example.com/surface-precision.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Finalmouse Starlight-12 Poseidon', 'Ultra-premium wireless gaming mouse with magnesium alloy unibody design weighing just 42 grams. Features custom-designed wireless technology, state-of-the-art sensor, and pure PTFE feet. Limited edition design with unique colorway and serial number. Includes premium carrying case, USB-C charging cable, and collectors certificate.', 189.99, 'finalmouse-starlight-12', ARRAY['https://example.com/starlight-12.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Roccat Kone XP Air', 'Wireless ergonomic gaming mouse with 3D RGB lighting and 15 programmable buttons. Features Owl-Eye 19K DPI optical sensor, Titan Switch Optical, and rapid-charge dock. Includes Krystal 4D Wheel, bi-directional tilt functions, and Easy-Shift[+] technology for expanded button functionality. Up to 100 hours of battery life with rapid charging capability.', 149.99, 'roccat-kone-xp-air', ARRAY['https://example.com/kone-xp-air.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Logitech G502 X Plus', 'Iconic wireless gaming mouse reimagined with LIGHTFORCE hybrid optical-mechanical switches. Features HERO 25K sensor, LIGHTSPEED wireless technology, and POWERPLAY compatibility. Includes 13 programmable controls, dual-mode hyperfast scroll wheel, and adjustable DPI shifting. Enhanced with LIGHTSYNC RGB and up to 130 hours of battery life.', 159.99, 'logitech-g502-x-plus', ARRAY['https://example.com/g502-x-plus.jpg'], 70, 14, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Glorious Model O', 'Ultra-lightweight gaming mouse with honeycomb shell design weighing 67 grams. Features Pixart 3360 sensor, Omron switches, and premium G-Skates pure PTFE feet. Includes ascending RGB lighting, flexible Ascended Cord, and customizable DPI settings. Available in matte and glossy finishes with multiple size options.', 59.99, 'glorious-model-o', ARRAY['https://example.com/model-o.jpg'], 75, 15, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Endgame Gear XM1r', 'Professional-grade gaming mouse featuring Pixart 3370 sensor and Kailh GM 8.0 switches. Advanced firmware for class-leading click latency, pre-sorted switches for consistent feel, and flexible cord design. Includes PTFE skates, adjustable lift-off distance, and zero smoothing or acceleration. Available in multiple colors with textured coating options.', 69.99, 'endgame-gear-xm1r', ARRAY['https://example.com/xm1r.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'SteelSeries Prime Wireless', 'Professional esports mouse with revolutionary Prestige OM optical magnetic switches. Features TrueMove Pro sensor, 100-hour battery life, and quantum 2.0 wireless technology. Includes detachable USB-C cable, premium magnetic switches rated for 100 million clicks, and super mesh outer shell for enhanced durability.', 129.99, 'steelseries-prime-wireless', ARRAY['https://example.com/prime-wireless.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Ninjutso Origin One X', 'Ultralight wireless gaming mouse with classic ergonomic shape weighing 69 grams. Features PAW3370 sensor, Kailh GM 8.0 switches, and pure PTFE feet. Includes 2.4GHz wireless technology, up to 70 hours battery life, and USB-C charging. Minimalist design with no RGB lighting for maximum performance focus.', 79.99, 'ninjutso-origin-one-x', ARRAY['https://example.com/origin-one-x.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Logitech M720 Triathlon', 'Multi-device wireless mouse designed for productivity across multiple computers. Features Easy-Switch technology for connecting up to three devices, hyper-fast scrolling, and programmable buttons. Includes advanced power efficiency with up to 24 months battery life on single AA battery. Compatible with Windows, macOS, Chrome OS, and Linux.', 49.99, 'logitech-m720-triathlon', ARRAY['https://example.com/m720-triathlon.jpg'], 85, 17, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'XTRFY M42 Wireless', 'Ultra-lightweight wireless gaming mouse with interchangeable back shells for customizable grip. Features Pixart 3370 sensor, Kailh GM 8.0 switches, and customizable RGB lighting. Includes 2.4GHz wireless connectivity, USB-C charging, and pure PTFE skates. Available in multiple colorways with optional grip tape included.', 89.99, 'xtrfy-m42-wireless', ARRAY['https://example.com/m42-wireless.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Razer Basilisk V3 Pro', 'Advanced wireless gaming mouse with 13 programmable buttons and intelligent scroll wheel. Features Focus Pro 30K optical sensor, Gen-3 optical switches, and HyperScroll tilt wheel. Includes wireless charging compatibility, 10+1 Chroma RGB lighting zones, and thumb trigger clutch. Customizable via Razer Synapse with onboard memory profiles.', 159.99, 'razer-basilisk-v3-pro', ARRAY['https://example.com/basilisk-v3-pro.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Cooler Master MM712', 'Lightweight wireless gaming mouse with multi-connectivity options weighing 59 grams. Features PAW3370 sensor, dual wireless modes (2.4GHz/Bluetooth), and LK optical switches. Includes hybrid design for multiple grip styles, pure PTFE feet, and up to 80 hours battery life. Available in black and white variants.', 69.99, 'cooler-master-mm712', ARRAY['https://example.com/mm712.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Lamzu Atlantis', 'Premium ultra-lightweight wireless gaming mouse with symmetrical design weighing 55 grams. Features PAW3395 sensor, Kailh GM 8.0 Black switches, and pure PTFE skates. Includes 2.4GHz wireless technology, USB-C charging, and up to 70 hours battery life. Available in multiple unique colorways with included grip tape.', 139.99, 'lamzu-atlantis', ARRAY['https://example.com/lamzu-atlantis.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),

(gen_random_uuid(), 'Kensington Pro Fit Ergo Vertical', 'Ergonomic vertical wireless mouse designed to promote natural hand positioning. Features advanced optical tracking, programmable buttons, and dual wireless connectivity. Includes contoured thumb rest, precision scroll wheel, and extended battery life. Perfect for users seeking comfort during extended computer use. Compatible with Windows and macOS.', 79.99, 'kensington-pro-fit-ergo', ARRAY['https://example.com/kensington-ergo.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Mice'), now()),





-- Monitors 20
(gen_random_uuid(), 'LG 27GP950-B UltraGear', 'Professional 27-inch 4K Nano IPS gaming monitor with cutting-edge features. 3840x2160 resolution with 144Hz refresh rate (160Hz OC) and 1ms GtG response time. HDMI 2.1 compatibility for next-gen console gaming at 4K 120Hz. Features NVIDIA G-SYNC Compatible and AMD FreeSync Premium Pro certification for tear-free gaming. Nano IPS technology delivers 98% DCI-P3 color coverage and VESA DisplayHDR 600 certification. Includes hardware calibration, RGB Sphere Lighting 2.0, and ergonomic stand with height, tilt, and pivot adjustments. Two HDMI 2.1 ports, one DisplayPort 1.4, and USB hub functionality.', 899.99, 'lg-27gp950-b-ultragear', ARRAY['https://example.com/lg-27gp950.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Samsung Odyssey G7', '32-inch curved gaming monitor with revolutionary 1000R curvature and QLED technology. Features 2560x1440 resolution with 240Hz refresh rate and 1ms response time. Quantum HDR 600 support provides stunning contrast and vibrant colors with 95% DCI-P3 coverage. G-Sync Compatible and FreeSync Premium Pro certified for smooth gameplay. Includes Core Sync lighting, height adjustable stand, and Eye Saver Mode. Dual DisplayPort 1.4, HDMI 2.0, and USB 3.0 hub for connectivity.', 799.99, 'samsung-odyssey-g7-32', ARRAY['https://example.com/odyssey-g7.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Dell U3223QE UltraSharp', 'Professional 32-inch 4K IPS Black technology monitor designed for content creation. 3840x2160 resolution with 60Hz refresh rate and exceptional color accuracy. Features 2000:1 contrast ratio, 98% DCI-P3 coverage, and VESA DisplayHDR 400 certification. Includes USB-C hub with 90W power delivery, KVM switch, and Picture-by-Picture mode. Comprehensive connectivity with HDMI, DisplayPort, USB-C, and RJ45 ethernet. Factory calibrated with Delta E < 2 accuracy.', 999.99, 'dell-u3223qe-ultrasharp', ARRAY['https://example.com/dell-u3223qe.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'ASUS ROG Swift PG279QM', '27-inch WQHD gaming monitor with advanced features for competitive gaming. 2560x1440 resolution with 240Hz refresh rate and Fast IPS panel technology. True 1ms GTG response time with NVIDIA G-SYNC Ultimate certification. Features 95% DCI-P3 coverage, DisplayHDR 400, and ASUS-exclusive GamePlus features. Includes RGB lighting synchronization, USB hub, and ergonomic stand with full adjustability.', 849.99, 'asus-pg279qm', ARRAY['https://example.com/asus-pg279qm.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Alienware AW3423DW', '34-inch ultrawide QD-OLED gaming monitor with stunning contrast and color. 3440x1440 resolution with 175Hz refresh rate and true 0.1ms response time. Quantum Dot OLED technology provides infinite contrast and 99.3% DCI-P3 coverage. Features G-SYNC Ultimate certification, Creator Mode presets, and AlienFX lighting. Includes comprehensive 3-year warranty with OLED burn-in coverage and premium build quality.', 1299.99, 'alienware-aw3423dw', ARRAY['https://example.com/aw3423dw.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'BenQ SW321C PhotoVue', 'Professional 32-inch 4K monitor designed for photography and color-critical work. 3840x2160 resolution with 99% Adobe RGB and 95% DCI-P3 coverage. Features Paper Color Sync technology, hardware calibration, and 16-bit 3D LUT. Includes shading hood, Hotkey Puck G2, and Advanced Black & White mode. Comprehensive connectivity with USB-C, HDMI 2.0, DisplayPort 1.4, and SD card reader.', 1999.99, 'benq-sw321c', ARRAY['https://example.com/benq-sw321c.jpg'], 20, 4, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'MSI MEG ARTYMIS 341 Mini LED', '34-inch ultrawide curved gaming monitor with Mini LED technology. 3440x1440 resolution with 165Hz refresh rate and 1ms response time. Features 1000 local dimming zones, DisplayHDR 1000, and Gaming Intelligence features. Includes KVM switch, USB-C with 65W power delivery, and MSI Gaming OSD software. Quantum Dot technology delivers 97% DCI-P3 coverage.', 1099.99, 'msi-meg-artymis-341', ARRAY['https://example.com/msi-artymis.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'ViewSonic ColorPro VP2776', '27-inch professional monitor with advanced color accuracy features. 2560x1440 resolution with 165Hz refresh rate and Nano IPS technology. Factory calibrated with Pantone Validation and CalMAN verification. Features 98% DCI-P3 coverage, USB-C with 90W power delivery, and built-in colorimeter. Includes shading hood, USB hub, and multi-monitor color consistency.', 749.99, 'viewsonic-vp2776', ARRAY['https://example.com/viewsonic-vp2776.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Gigabyte M32U', '32-inch 4K gaming monitor with HDMI 2.1 support for next-gen gaming. 3840x2160 resolution with 144Hz refresh rate and SS IPS technology. Features FreeSync Premium Pro, KVM 3.0, and Black Equalizer 2.0. Includes USB-C with 15W power delivery, built-in speakers, and OSD Sidekick software. Ergonomic stand with height, tilt, and pivot adjustments.', 799.99, 'gigabyte-m32u', ARRAY['https://example.com/gigabyte-m32u.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'LG 40WP95C UltraWide', '40-inch curved ultrawide monitor designed for productivity and content creation. 5120x2160 resolution with 72Hz refresh rate and Nano IPS technology. Features Thunderbolt 4 connectivity, 96W power delivery, and PbP/PiP modes. Includes ambient light sensor, MaxxAudio speakers, and comprehensive color calibration options. Perfect for replacing dual-monitor setups.', 1699.99, 'lg-40wp95c', ARRAY['https://example.com/lg-40wp95c.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'ASUS ProArt PA32UCG-K', 'Professional 32-inch 4K HDR monitor with Mini LED technology. 3840x2160 resolution with variable 120Hz refresh rate. Features 1600 nits peak brightness, Dolby Vision support, and true 10-bit color. Includes built-in colorimeter, hardware calibration, and comprehensive connectivity options. Calman Verified with multiple HDR format support.', 2999.99, 'asus-proart-pa32ucg', ARRAY['https://example.com/asus-pa32ucg.jpg'], 15, 3, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Samsung Odyssey Neo G8', '32-inch 4K curved gaming monitor with Mini LED technology. 3840x2160 resolution with 240Hz refresh rate and 1ms response time. Features Quantum Matrix Technology, CoreSync lighting, and Auto Source Switch+. Includes FreeSync Premium Pro, G-Sync compatibility, and comprehensive gaming features. Quantum HDR 2000 certification for stunning contrast.', 1499.99, 'samsung-odyssey-neo-g8', ARRAY['https://example.com/neo-g8.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Acer Predator X28', '28-inch 4K gaming monitor with NVIDIA Reflex Latency Analyzer. 3840x2160 resolution with 152Hz refresh rate (OC) and Agile-Splendor IPS panel. Features G-SYNC ULTIMATE certification, VESA DisplayHDR 400, and LightSense technology. Includes BlueLightShield Pro, ergonomic stand, and built-in speakers.', 649.99, 'acer-predator-x28', ARRAY['https://example.com/predator-x28.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Dell S2722QC', '27-inch 4K USB-C monitor perfect for home office and productivity. 3840x2160 resolution with 60Hz refresh rate and ComfortView Plus technology. Features USB-C with 65W power delivery, built-in speakers, and Picture-in-Picture capability. Includes integrated KVM switch, 99% sRGB coverage, and slim bezels for multi-monitor setups.', 449.99, 'dell-s2722qc', ARRAY['https://example.com/dell-s2722qc.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Huawei MateView', '28.2-inch 4K+ professional monitor with unique 3:2 aspect ratio. 3840x2560 resolution with wireless projection capabilities and USB-C connectivity. Features 98% DCI-P3 coverage, HDR 400 certification, and touch-sensitive control bar. Includes 65W power delivery, built-in speakers, and minimalist design aesthetic.', 699.99, 'huawei-mateview', ARRAY['https://example.com/huawei-mateview.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Eve Spectrum ES07D03', '27-inch 4K gaming monitor with community-driven design. 3840x2160 resolution with 144Hz refresh rate and 1ms response time. Features USB-C with 100W power delivery, HDMI 2.1, and factory calibration. Includes RGB ambient lighting, comprehensive OSD options, and optional stand. Designed with input from gaming community.', 799.99, 'eve-spectrum-4k', ARRAY['https://example.com/eve-spectrum.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Philips 329P1H', '32-inch 4K USB-C docking monitor for professional use. 3840x2160 resolution with Windows Hello popup webcam and built-in microphone. Features RJ45 ethernet connection, USB-C with 90W power delivery, and MultiView technology. Includes PowerSensor, LightSensor, and comprehensive ergonomic adjustments.', 749.99, 'philips-329p1h', ARRAY['https://example.com/philips-329p1h.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'AOC AGON Pro AG274QZM', '27-inch QHD Mini LED gaming monitor with exceptional HDR performance. 2560x1440 resolution with 240Hz refresh rate and 576 dimming zones. Features true 1ms GTG response time, G-Sync Compatible certification, and Light FX RGB. Includes QuickSwitch controller, USB hub, and comprehensive gaming features.', 999.99, 'aoc-agon-pro-ag274qzm', ARRAY['https://example.com/aoc-ag274qzm.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'Corsair XENEON 32UHD144', '32-inch 4K quantum dot gaming monitor with premium features. 3840x2160 resolution with 144Hz refresh rate and 1ms MPRT. Features AMD FreeSync Premium certification, iCUE integration, and RapidRoute cable management. Includes multi-mount system compatibility, comprehensive connectivity options, and HDR400 certification.', 999.99, 'corsair-xeneon-32uhd144', ARRAY['https://example.com/corsair-xeneon.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),

(gen_random_uuid(), 'LG DualUp 28MQ780-B', 'Innovative 27.6-inch monitor with unique 16:18 aspect ratio. 2560x2880 resolution with USB-C connectivity and ErgoStand design. Features Nano IPS technology, 98% DCI-P3 coverage, and HDR10 support. Perfect for productivity with split screen functionality and portrait orientation. Includes ambient light sensor and comprehensive color controls.', 699.99, 'lg-dualup-28mq780', ARRAY['https://example.com/lg-dualup.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Monitors'), now()),





-- Ram 20
(gen_random_uuid(), 'G.SKILL Trident Z5 RGB DDR5-6400', 'Premium DDR5 gaming memory featuring Samsung B-die ICs and advanced RGB lighting. 32GB kit (2x16GB) with extreme speed ratings of 6400MT/s and CL32-39-39-102 timings at 1.4V. Features precision-crafted aluminum heat spreader with tri-fin design for optimal thermal dissipation. Integrated RGB lighting with 8 customizable zones compatible with major motherboard RGB ecosystems. Intel XMP 3.0 certified for easy overclocking, thoroughly tested for stability and compatibility with latest Intel and AMD platforms. Includes lifetime warranty and G.SKILL performance guarantee.', 289.99, 'gskill-trident-z5-rgb-6400', ARRAY['https://example.com/trident-z5.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Corsair Dominator Platinum RGB DDR5-5600', 'High-performance DDR5 memory with patented DHX cooling technology. 32GB kit (2x16GB) running at 5600MT/s with tight CL36-36-36-76 timings. Features custom hand-screened memory chips and 12-layer PCB design. Includes Corsair iCUE compatibility for dynamic RGB control and monitoring, built-in voltage regulation, and aluminum heat spreader. Supports Intel XMP 3.0 profiles and on-die ECC for enhanced stability. Patented dual-path DHX cooling technology maintains optimal operating temperatures under heavy loads.', 259.99, 'corsair-dominator-platinum-ddr5-5600', ARRAY['https://example.com/dominator-platinum.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Kingston Fury Beast DDR5-6000', 'High-performance DDR5 memory designed for gaming and overclocking. 32GB kit (2x16GB) operating at 6000MT/s with CL40-40-40-80 timings. Features low-profile heat spreader design for improved compatibility with large CPU coolers. Includes on-die ECC, built-in PMIC for enhanced power management, and Intel XMP 3.0 certification. Tested for compatibility with major motherboard manufacturers. Black aluminum heat spreader provides effective thermal dissipation while maintaining sleek aesthetics.', 219.99, 'kingston-fury-beast-ddr5-6000', ARRAY['https://example.com/fury-beast.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Crucial Ballistix MAX DDR4-4400', 'Extreme performance DDR4 memory for competitive gaming and overclocking. 16GB kit (2x8GB) running at 4400MT/s with CL19-19-19-43 timings. Features precision-tuned Micron memory chips and custom PCB design. Includes integrated temperature sensor, extruded aluminum heat spreader, and XMP 2.0 support. Eight-zone RGB lighting with 16 LEDs per module controlled via Crucial MOD software. Thoroughly tested for stability at rated speeds with lifetime warranty coverage.', 169.99, 'crucial-ballistix-max-4400', ARRAY['https://example.com/ballistix-max.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'TeamGroup T-Force Xtreem ARGB DDR4-4000', 'High-performance DDR4 memory with innovative mirror light design. 16GB kit (2x8GB) at 4000MT/s with CL18-20-20-44 timings. Features full mirror light reflection design with ARGB lighting effects. Includes specialized aluminum heat spreader, screened memory chips, and 10-layer PCB. Supports Intel XMP 2.0 profiles and synchronized RGB control with major motherboard manufacturers. Optimized for both Intel and AMD platforms with extensive compatibility testing.', 149.99, 'teamgroup-xtreem-argb-4000', ARRAY['https://example.com/xtreem-argb.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'G.SKILL Ripjaws V DDR4-3600', 'High-performance DDR4 memory optimized for gaming and content creation. 32GB kit (2x16GB) running at 3600MT/s with CL16-19-19-39 timings. Features classic Ripjaws heat spreader design for efficient cooling. Includes hand-selected Samsung B-die ICs, XMP 2.0 profile support, and extensive compatibility testing. Low-profile design ensures compatibility with most CPU coolers. Backed by G.SKILL lifetime warranty and technical support.', 159.99, 'gskill-ripjaws-v-3600', ARRAY['https://example.com/ripjaws-v.jpg'], 70, 14, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Thermaltake TOUGHRAM RC DDR4-4600', 'Premium DDR4 memory with advanced cooling technology. 16GB kit (2x8GB) operating at 4600MT/s with CL19-25-25-45 timings. Features 10-layer PCB design with 2oz copper inner layers for superior signal quality. Includes real-time temperature monitoring, patented snap-on heat spreader design, and synchronized RGB lighting. Compatible with TT RGB PLUS software and major RGB ecosystems. Tested for stability at rated speeds with lifetime warranty.', 189.99, 'thermaltake-toughram-rc-4600', ARRAY['https://example.com/toughram-rc.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Corsair Vengeance LPX DDR4-3200', 'Reliable DDR4 memory designed for high-performance systems. 32GB kit (2x16GB) at 3200MT/s with CL16-18-18-36 timings. Features low-profile design for maximum compatibility and pure aluminum heat spreader. Includes hand-sorted memory chips, eight-layer PCB design, and XMP 2.0 support. Optimized for Intel and AMD platforms with extensive testing. Perfect for compact builds and systems with large CPU coolers.', 129.99, 'corsair-vengeance-lpx-3200', ARRAY['https://example.com/vengeance-lpx.jpg'], 85, 17, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Kingston Server Premier DDR4-3200', 'ECC Registered server memory for enterprise applications. 64GB kit (2x32GB) running at 3200MT/s with CL22-22-22 timings. Features thermal sensor integration, 100% factory testing at speed, and on-die ECC protection. Includes proprietary thermal solutions and compatibility with major server platforms. Backed by Kingston limited lifetime warranty and technical support. Ideal for data centers and mission-critical applications.', 459.99, 'kingston-server-premier-3200', ARRAY['https://example.com/server-premier.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Crucial DDR5-4800 ECC Registered', 'Enterprise-grade DDR5 memory for professional workstations and servers. 64GB kit (2x32GB) at 4800MT/s with CL40-39-39-77 timings. Features on-die ECC, power management IC, and enhanced reliability components. Includes thermal sensor monitoring, extensive compatibility validation, and server-grade PCB design. Optimized for latest Intel Xeon platforms with comprehensive testing and certification. Backed by Crucial limited lifetime warranty.', 529.99, 'crucial-ddr5-4800-ecc', ARRAY['https://example.com/crucial-ecc.jpg'], 20, 4, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Team T-Create Expert DDR4-3600', 'Professional-grade DDR4 memory for content creators and workstations. 64GB kit (2x32GB) operating at 3600MT/s with CL18-22-22-42 timings. Features specialized heat spreader design for sustained workloads and stability. Includes selected IC chips, multi-layer PCB design, and XMP 2.0 profiles. Tested for compatibility with professional software applications. Backed by lifetime warranty and technical support.', 289.99, 'team-tcreate-expert-3600', ARRAY['https://example.com/tcreate-expert.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'G.SKILL Trident Z Neo DDR4-3800', 'Optimized DDR4 memory for AMD Ryzen platforms. 32GB kit (2x16GB) running at 3800MT/s with CL14-16-16-36 timings. Features dual-tone heat spreader design with RGB lighting integration. Includes Samsung B-die ICs, custom PCB design, and XMP 2.0 support. Eight-zone RGB lighting compatible with major RGB software. Specifically tested for AMD platform compatibility and performance.', 219.99, 'gskill-trident-z-neo-3800', ARRAY['https://example.com/trident-z-neo.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Corsair Vengeance RGB RT DDR4-3600', 'High-performance DDR4 memory with dynamic RGB lighting. 32GB kit (2x16GB) at 3600MT/s with CL16-20-20-38 timings. Features modern aluminum heat spreader design with ten individually addressable RGB LEDs. Includes custom PCB design, carefully screened memory chips, and iCUE software integration. Optimized for latest AMD platforms with extensive compatibility testing. Backed by Corsair lifetime warranty.', 179.99, 'corsair-vengeance-rgb-rt-3600', ARRAY['https://example.com/vengeance-rgb-rt.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'ADATA XPG Lancer DDR5-5200', 'Gaming-focused DDR5 memory with elegant design. 32GB kit (2x16GB) operating at 5200MT/s with CL38-38-38-76 timings. Features tungsten grey heat spreader with contemporary aesthetic. Includes on-die ECC, PMIC for power management, and Intel XMP 3.0 support. Thoroughly tested for stability and compatibility with latest platforms. Backed by limited lifetime warranty and technical support.', 239.99, 'adata-xpg-lancer-5200', ARRAY['https://example.com/xpg-lancer.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Patriot Viper Steel DDR4-4400', 'High-performance DDR4 memory for enthusiast systems. 16GB kit (2x8GB) running at 4400MT/s with CL19-19-19-39 timings. Features aggressive aluminum heat spreader design for maximum thermal dissipation. Includes hand-tested memory chips, custom PCB design, and XMP 2.0 support. Zero RGB lighting for focused performance. Extensively tested for stability at rated speeds.', 159.99, 'patriot-viper-steel-4400', ARRAY['https://example.com/viper-steel.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'TeamGroup Elite Plus DDR4-3200', 'Value-oriented DDR4 memory for system builders. 32GB kit (2x16GB) at 3200MT/s with CL22-22-22-52 timings. Features simple aluminum heat spreader design for efficient cooling. Includes selected memory chips, standard PCB design, and XMP 2.0 profile support. Tested for broad compatibility with Intel and AMD platforms. Perfect for budget-conscious builds requiring larger capacity.', 89.99, 'teamgroup-elite-plus-3200', ARRAY['https://example.com/elite-plus.jpg'], 90, 18, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Crucial Ballistix RGB DDR4-3600', 'Performance DDR4 memory with integrated RGB lighting. 32GB kit (2x16GB) operating at 3600MT/s with CL16-18-18-38 timings. Features modern heat spreader design with 8-zone RGB lighting. Includes Micron E-die ICs, aluminum heat spreader, and XMP 2.0 support. Compatible with major RGB software ecosystems. Optimized for gaming and content creation workloads.', 169.99, 'crucial-ballistix-rgb-3600', ARRAY['https://example.com/ballistix-rgb.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'G.SKILL Flare X DDR4-3200', 'AMD-optimized DDR4 memory for Ryzen systems. 32GB kit (2x16GB) running at 3200MT/s with CL14-14-14-34 timings. Features classic heat spreader design for reliable cooling. Includes Samsung B-die ICs, tested PCB design, and XMP 2.0 support. Specifically designed and tested for AMD platform compatibility. Backed by G.SKILL lifetime warranty.', 159.99, 'gskill-flare-x-3200', ARRAY['https://example.com/flare-x.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Thermaltake TOUGHRAM XG RGB DDR4-4000', 'Premium RGB DDR4 memory with advanced lighting effects. 16GB kit (2x8GB) at 4000MT/s with CL18-19-19-39 timings. Features 10 addressable LEDs per module with unique X-shape light bar. Includes aerospace-grade aluminum heat spreader, selected memory chips, and XMP 2.0 profiles. Compatible with TT RGB PLUS ecosystem and major motherboard software. Includes real-time temperature monitoring.', 179.99, 'thermaltake-toughram-xg-4000', ARRAY['https://example.com/toughram-xg.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),

(gen_random_uuid(), 'Kingston FURY Impact DDR4-3200 SODIMM', 'High-performance laptop memory for gaming notebooks. 32GB kit (2x16GB) operating at 3200MT/s with CL20-22-22 timings. Features automatic overclocking with Intel XMP and AMD profiles. Includes thermal management optimizations, plug-and-play functionality at 2666MT/s. Extensively tested for compatibility with gaming laptops and small form factor systems. Backed by lifetime warranty and free technical support.', 149.99, 'kingston-fury-impact-3200', ARRAY['https://example.com/fury-impact.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'Ram'), now()),




-- PSU 20
(gen_random_uuid(), 'Seasonic PRIME TX-1000', 'Ultra-premium 1000W power supply featuring Titanium efficiency certification (95% efficiency at 50% load). Fully modular design with premium Japanese capacitors rated for 105°C and advanced hybrid fan control system. Features micro-tolerance load regulation (±0.5%), multi-GPU support, and premium individually sleeved cables. Advanced protection suite includes OPP, OVP, UVP, OCP, OTP, and SCP. Fluid Dynamic Bearing fan with semi-passive operation for silent performance. Includes 12-year warranty and comprehensive cable set for high-end builds. Hybrid Mode switch for fanless operation under light loads.', 359.99, 'seasonic-prime-tx-1000', ARRAY['https://example.com/prime-tx-1000.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Corsair AXi 1600', 'Professional-grade 1600W digital power supply with 80 PLUS Titanium efficiency. Features digital interface for real-time monitoring and custom fan curves through Corsair iCUE software. Fully modular design with premium individually sleeved cables and 100% Japanese capacitors. Zero RPM fan mode for silent operation at low loads, custom fluid dynamic bearing fan for longevity. Includes full monitoring capabilities for voltage, current, power input/output, and temperature. Advanced protection circuits with tight voltage regulation (±2%). 10-year warranty with exceptional customer support.', 499.99, 'corsair-axi-1600', ARRAY['https://example.com/axi-1600.jpg'], 25, 5, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'be quiet! Dark Power Pro 12 1500W', 'High-end 1500W power supply with 80 PLUS Titanium certification and modular cable management. Features frameless Silent Wings fan with advanced FDB bearing and six-pole motor. Includes wireless control for multi-rail/single-rail switching, overclocking key for enhanced 12V rail performance. Full bridge LLC design with SR and DC-to-DC conversion for exceptional efficiency. Premium-grade Japanese capacitors, comprehensive protection circuits, and sleeved cables included. 10-year warranty and extensive testing for reliability.', 449.99, 'bequiet-dark-power-pro-12-1500', ARRAY['https://example.com/dark-power-pro-12.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'EVGA SuperNOVA 850 G6', 'High-performance 850W power supply with 80 PLUS Gold certification and fully modular design. Features ECO Mode fan control for silent operation at low loads and 100% Japanese capacitors. Includes DC-to-DC conversion, LLC resonant circuit design, and tight voltage regulation (±2%). Fluid Dynamic Bearing fan for long-term reliability and quiet operation. Full protections suite with OVP, UVP, OCP, OPP, SCP, and OTP. 10-year warranty and EVGAs exceptional customer support.', 149.99, 'evga-supernova-850-g6', ARRAY['https://example.com/supernova-850-g6.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Phanteks Revolt X 1200W', 'Dual-system capable 1200W power supply with 80 PLUS Platinum efficiency. Features independent rails for dual system operation, fully modular cable design with premium sleeved cables. Includes hybrid fan control mode, Japanese capacitors, and DC-to-DC conversion technology. Comprehensive protection suite with dual-system safeguards and monitoring. Silent operation with 135mm fluid dynamic bearing fan. 10-year warranty and extensive reliability testing.', 279.99, 'phanteks-revolt-x-1200', ARRAY['https://example.com/revolt-x-1200.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Fractal Design Ion+ 860P', 'Premium 860W power supply with 80 PLUS Platinum efficiency and fully modular design. Features UltraFlex DC cables for easy installation, zero RPM fan mode for silent operation. Includes Japanese capacitors, DC-to-DC conversion, and comprehensive protection suite. Custom 140mm fan with FDB bearing for quiet performance. Semi-passive operation mode and 10-year warranty. Includes premium braided cables and extensive accessory kit.', 179.99, 'fractal-ion-860p', ARRAY['https://example.com/ion-860p.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Silverstone SX1000 SFX-L', 'Compact 1000W SFX-L form factor power supply with 80 PLUS Platinum efficiency. Features fully modular design optimized for small form factor builds. Includes 120mm FDB fan with semi-fanless operation, 100% Japanese capacitors, and DC-to-DC conversion. Full protection suite and premium flat cables included. Designed for high-power SFF gaming builds with support for premium GPUs. 5-year warranty and SFF-optimized cable lengths.', 259.99, 'silverstone-sx1000', ARRAY['https://example.com/sx1000.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'MSI MPG A850G PCIE5', 'Modern 850W power supply with PCIe 5.0 12VHPWR connector support and 80 PLUS Gold efficiency. Features fully modular design with premium Japanese capacitors and DC-to-DC conversion. Includes hybrid fan mode, comprehensive protection circuits, and premium flat cables. Designed for next-generation GPUs with standard ATX 3.0 compliance. 10-year warranty and MSI reliable customer support.', 169.99, 'msi-mpg-a850g', ARRAY['https://example.com/mpg-a850g.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'XPG Core Reactor 850W', 'High-performance 850W power supply with 80 PLUS Gold certification and fully modular design. Features Japanese capacitors, DC-to-DC conversion, and tight voltage regulation. Includes hybrid fan control, premium flat cables, and full protection suite. 120mm fluid dynamic bearing fan for quiet operation. 10-year warranty and extensive testing for reliability.', 149.99, 'xpg-core-reactor-850', ARRAY['https://example.com/core-reactor-850.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Thermaltake Toughpower GF3 1200W', 'Advanced 1200W power supply with PCIe 5.0 support and 80 PLUS Gold efficiency. Features digital monitoring capabilities, fully modular design with premium cables. Includes zero RPM fan mode, Japanese capacitors, and comprehensive protection suite. Smart zero fan system with 140mm hydraulic bearing fan. 10-year warranty and Thermaltakes reliable support.', 269.99, 'thermaltake-toughpower-gf3-1200', ARRAY['https://example.com/toughpower-gf3.jpg'], 35, 7, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'FSP Hydro G Pro 1000W', 'High-efficiency 1000W power supply with 80 PLUS Gold certification and fully modular design. Features MIA IC digital monitoring, Japanese capacitors, and DC-to-DC conversion. Includes semi-fanless mode, premium flat cables, and full protection suite. 135mm FDB fan for reliable cooling. 10-year warranty and comprehensive testing program.', 199.99, 'fsp-hydro-g-pro-1000', ARRAY['https://example.com/hydro-g-pro.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Lian Li SP850', 'SFX 850W power supply designed for compact builds with 80 PLUS Gold efficiency. Features fully modular design, premium Japanese capacitors, and DC-to-DC conversion. Includes zero RPM fan mode, flat cables optimized for SFF cases, and comprehensive protection suite. 92mm fluid dynamic bearing fan for reliable cooling. 5-year warranty and extensive compatibility testing.', 159.99, 'lian-li-sp850', ARRAY['https://example.com/sp850.jpg'], 50, 10, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Super Flower Leadex III Gold 750W', 'Premium 750W power supply with 80 PLUS Gold certification and fully modular design. Features semi-fanless operation, Japanese capacitors, and DC-to-DC conversion. Includes premium individually sleeved cables, comprehensive protection suite, and tight voltage regulation. 140mm FDB fan for quiet operation. 10-year warranty and Super Flowers renowned build quality.', 139.99, 'super-flower-leadex-iii-750', ARRAY['https://example.com/leadex-iii.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Cooler Master V850 SFX Gold', 'Compact 850W SFX power supply with 80 PLUS Gold efficiency and full modularity. Features 92mm FDB fan, Japanese capacitors, and DC-to-DC conversion. Includes semi-fanless operation, flat cables, and full protection suite. Designed for high-performance SFF builds with premium component support. 10-year warranty and extensive reliability testing.', 169.99, 'cooler-master-v850-sfx', ARRAY['https://example.com/v850-sfx.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'ASUS ROG Thor 1200P2', 'Premium 1200W power supply with PCIe 5.0 support and 80 PLUS Platinum efficiency. Features OLED power display, ASUS Aura Sync RGB lighting, and fully modular design. Includes 135mm wing-blade fan, Japanese capacitors, and comprehensive protection suite. Built-in OLED display shows real-time power consumption. 10-year warranty and ROG build quality.', 359.99, 'asus-rog-thor-1200p2', ARRAY['https://example.com/thor-1200p2.jpg'], 30, 6, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'SilverStone ET700-MG', 'Efficient 700W power supply with 80 PLUS Gold certification and semi-modular design. Features DC-to-DC conversion, Japanese capacitors, and comprehensive protection suite. Includes 120mm fluid dynamic bearing fan and flat cable design. Compact depth for improved case compatibility. 5-year warranty and reliable performance focus.', 109.99, 'silverstone-et700-mg', ARRAY['https://example.com/et700-mg.jpg'], 60, 12, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Seasonic Focus GX-650', 'Reliable 650W power supply with 80 PLUS Gold efficiency and fully modular design. Features hybrid silent fan control, premium Japanese capacitors, and DC-to-DC conversion. Includes comprehensive protection suite, flat cables, and compact chassis design. 120mm fluid dynamic bearing fan for quiet operation. 10-year warranty and Seasonics legendary reliability.', 119.99, 'seasonic-focus-gx-650', ARRAY['https://example.com/focus-gx-650.jpg'], 65, 13, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'NZXT C1000 Gold', 'Advanced 1000W power supply with 80 PLUS Gold certification and fully modular design. Features Japanese capacitors, DC-to-DC conversion, and modern standby compatibility. Includes zero RPM fan mode, premium sleeved cables, and full protection suite. 135mm fluid dynamic bearing fan for reliable cooling. 10-year warranty and NZXT premium support.', 189.99, 'nzxt-c1000-gold', ARRAY['https://example.com/c1000-gold.jpg'], 40, 8, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'Corsair SF750', 'Premium SFX 750W power supply with 80 PLUS Platinum efficiency and fully modular design. Features 92mm fluid dynamic bearing fan, zero RPM fan mode, and 100% Japanese capacitors. Includes individually sleeved premium cables, comprehensive protection suite, and compact form factor. Optimized for small form factor builds with high-end components. 7-year warranty and Corsair reliable support.', 184.99, 'corsair-sf750', ARRAY['https://example.com/sf750.jpg'], 45, 9, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),

(gen_random_uuid(), 'be quiet! Pure Power 11 FM 750W', 'Efficient 750W power supply with 80 PLUS Gold certification and fully modular design. Features Silent Wings fan with advanced FDB bearing, Japanese capacitors, and DC-to-DC conversion. Includes comprehensive protection suite, flat cables, and quiet operation focus. Premium build quality with 5-year warranty and reliable German engineering.', 129.99, 'bequiet-pure-power-11-fm-750', ARRAY['https://example.com/pure-power-11-fm.jpg'], 55, 11, (SELECT id FROM sub_categories WHERE name = 'PSU'), now()),



-- Motherboard 20
(gen_random_uuid(), 
'ASUS ROG Maximus Z790 Hero', 
'Premium ATX motherboard featuring Intel Z790 chipset, PCIe 5.0, DDR5 support up to 7800MHz, 20+1 power stages, WiFi 6E, 2.5Gb Ethernet, USB4 Type-C, and advanced cooling solutions. Perfect for high-end gaming builds and content creation. Includes AI overclocking, RGB headers, and comprehensive fan control through ArmouryCrate software.',
699.99,
'asus-rog-maximus-z790-hero',
ARRAY['https://example.com/maximus-z790-hero.jpg'],
25, 5,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'MSI MEG Z790 ACE',
'High-end ATX motherboard with Intel Z790 chipset, featuring premium 24+1+2 power solution, DDR5 memory support up to 7600MHz, PCIe 5.0 slots, triple M.2 slots with M.2 Shield Frozr, Dynamic Dashboard OLED display, and advanced thermal design with aluminum cover. Includes WiFi 6E and 10Gb Ethernet for ultimate connectivity.',
629.99,
'msi-meg-z790-ace',
ARRAY['https://example.com/meg-z790-ace.jpg'],
20, 4,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'GIGABYTE X670E AORUS Master',
'AMD AM5 socket motherboard with premium 16+2+2 power stages, DDR5 support, PCIe 5.0 x16 slots, quad M.2 NVMe slots with thermal guards, WiFi 6E, and 10GbE networking. Features advanced thermal design with Fins-Array III technology and direct-touch heatpipe. Includes Q-Flash Plus and dual BIOS for enhanced reliability.',
499.99,
'gigabyte-x670e-aorus-master',
ARRAY['https://example.com/x670e-aorus-master.jpg'],
30, 6,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASRock B650E Steel Legend WiFi',
'Mid-range AM5 motherboard featuring 14+2+1 Dr.MOS power design, DDR5 memory support, PCIe 5.0, dual M.2 slots, 2.5GbE LAN, WiFi 6E, and USB 3.2 Gen2x2 Type-C. Includes premium 7.1 CH HD audio with Nahimic Audio, Steel Slot protection, and full coverage heatsink design.',
279.99,
'asrock-b650e-steel-legend-wifi',
ARRAY['https://example.com/b650e-steel-legend.jpg'],
40, 8,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASUS ProArt Z790-CREATOR WIFI',
'Professional-grade motherboard designed for content creators, featuring Intel Z790 chipset, Thunderbolt 4, 10Gb Ethernet, WiFi 6E, and extensive connectivity options. Includes ProArt Creator Hub software, AI noise cancellation, and professional-grade power delivery with 16+1 stages for stable operation under heavy workloads.',
449.99,
'asus-proart-z790-creator',
ARRAY['https://example.com/proart-z790-creator.jpg'],
15, 3,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'MSI MPG B760I EDGE WIFI',
'Compact Mini-ITX motherboard with Intel B760 chipset, featuring 8+1+1 power solution, DDR5 support, PCIe 4.0, M.2 Shield Frozr, WiFi 6E, and 2.5G LAN. Perfect for small form factor builds without compromising on features. Includes premium audio capacitors and enhanced thermal solution.',
219.99,
'msi-mpg-b760i-edge-wifi',
ARRAY['https://example.com/mpg-b760i-edge.jpg'],
35, 7,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'GIGABYTE B650 AORUS Elite AX',
'Mid-range AM5 motherboard featuring 12+2+1 Twin Digital VRM design, DDR5 support, PCIe 4.0, dual M.2 slots with thermal guards, 2.5GbE LAN, and WiFi 6E. Includes Q-Flash Plus, RGB Fusion 2.0 support, and comprehensive thermal design with multiple temperature sensors.',
229.99,
'gigabyte-b650-aorus-elite-ax',
ARRAY['https://example.com/b650-aorus-elite.jpg'],
45, 9,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASUS TUF Gaming Z790-Plus WIFI',
'Durable gaming motherboard featuring military-grade components, 14+1 DrMOS power stages, DDR5 support, PCIe 5.0, dual M.2 slots, WiFi 6, and 2.5Gb Ethernet. Includes TUF Protection, enhanced power solution, and comprehensive cooling design with multiple hybrid fan headers.',
289.99,
'asus-tuf-z790-plus-wifi',
ARRAY['https://example.com/tuf-z790-plus.jpg'],
50, 10,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'MSI PRO Z790-A WIFI',
'Professional ATX motherboard with Intel Z790 chipset, featuring 14+1+1 Duet Rail Power System, DDR5 support, PCIe 5.0, triple M.2 slots, WiFi 6E, and 2.5G LAN. Includes Core Boost technology, premium thermal solution, and professional software suite for business and productivity.',
259.99,
'msi-pro-z790-a-wifi',
ARRAY['https://example.com/pro-z790-a.jpg'],
40, 8,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASRock X670E Taichi',
'High-end AM5 motherboard featuring 24+2+1 Dr.MOS power design, DDR5 support up to 6600MHz, PCIe 5.0 x16 slots, quad M.2 slots, WiFi 6E, and 10GbE LAN. Includes premium Nichicon audio capacitors, full coverage aluminum heatsink, and RGB Polychrome SYNC support.',
599.99,
'asrock-x670e-taichi',
ARRAY['https://example.com/x670e-taichi.jpg'],
20, 4,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASUS ROG STRIX B760-I Gaming WIFI',
'Compact Mini-ITX gaming motherboard featuring Intel B760 chipset, 8+1 power stages, DDR5 support, PCIe 4.0, dual M.2 slots, WiFi 6E, and 2.5Gb Ethernet. Perfect for high-performance small form factor gaming builds with ROG cooling features and AI noise cancellation.',
219.99,
'asus-rog-strix-b760-i',
ARRAY['https://example.com/strix-b760-i.jpg'],
30, 6,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'GIGABYTE Z790 AORUS Elite AX',
'Feature-rich gaming motherboard with Intel Z790 chipset, 16+1+2 Twin Digital VRM design, DDR5 support, PCIe 5.0, quad M.2 slots, WiFi 6E, and 2.5GbE LAN. Includes Smart Fan 6 technology, RGB Fusion 2.0, and comprehensive thermal design.',
329.99,
'gigabyte-z790-aorus-elite-ax',
ARRAY['https://example.com/z790-aorus-elite.jpg'],
35, 7,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'MSI MAG B650 TOMAHAWK WIFI',
'Mid-range AM5 motherboard featuring 12+2+1 Duet Rail Power System, DDR5 support, PCIe 4.0, dual M.2 slots with M.2 Shield Frozr, WiFi 6E, and 2.5G LAN. Includes premium thermal design, Lightning USB ports, and Audio Boost 5 technology.',
249.99,
'msi-mag-b650-tomahawk-wifi',
ARRAY['https://example.com/b650-tomahawk.jpg'],
45, 9,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASRock Z790 PG SONIC',
'Special edition gaming motherboard featuring 16+1+1 Dr.MOS power design, DDR5 support, PCIe 5.0, triple M.2 slots, WiFi 6E, and 2.5GbE LAN. Includes unique SONIC themed design elements, premium audio solution, and comprehensive cooling features.',
379.99,
'asrock-z790-pg-sonic',
ARRAY['https://example.com/z790-pg-sonic.jpg'],
25, 5,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASUS ROG STRIX X670E-E Gaming WIFI',
'High-performance AM5 motherboard featuring 18+2 power stages, DDR5 support up to 6400MHz, PCIe 5.0, quad M.2 slots with M.2 Q-Latch, WiFi 6E, and 2.5Gb Ethernet. Includes ROG exclusive features, comprehensive cooling, and premium gaming audio.',
549.99,
'asus-rog-strix-x670e-e',
ARRAY['https://example.com/strix-x670e-e.jpg'],
20, 4,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'MSI MPG Z790 Carbon WIFI',
'Premium gaming motherboard featuring 19+1+1 power solution, DDR5 support, PCIe 5.0, quad M.2 slots with M.2 Shield Frozr, WiFi 6E, and 2.5G LAN. Includes Carbon series design elements, Mystic Light RGB, and premium thermal solution.',
479.99,
'msi-mpg-z790-carbon-wifi',
ARRAY['https://example.com/z790-carbon.jpg'],
30, 6,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'GIGABYTE B760M AORUS Elite AX',
'Micro-ATX motherboard featuring Intel B760 chipset, 12+1+1 Twin Digital VRM, DDR5 support, PCIe 4.0, dual M.2 slots, WiFi 6E, and 2.5GbE LAN. Perfect for compact gaming builds with comprehensive features and reliable performance.',
199.99,
'gigabyte-b760m-aorus-elite-ax',
ARRAY['https://example.com/b760m-aorus-elite.jpg'],
40, 8,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASRock B650E PG Riptide WiFi',
'Mid-range AM5 motherboard featuring 14+2+1 Dr.MOS power design, DDR5 support, PCIe 5.0, dual M.2 slots, WiFi 6E, and 2.5GbE LAN. Includes Steel Slot protection, premium thermal design, and Polychrome RGB sync support.',
239.99,
'asrock-b650e-pg-riptide-wifi',
ARRAY['https://example.com/b650e-pg-riptide.jpg'],
35, 7,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'ASUS Prime Z790-A',
'Professional-grade motherboard featuring 16+1 power stages, DDR5 support, PCIe 5.0, triple M.2 slots, and 2.5Gb Ethernet. Includes ASUS OptiMem II, comprehensive cooling design, and AI suite software for enhanced performance and stability.',
309.99,
'asus-prime-z790-a',
ARRAY['https://example.com/prime-z790-a.jpg'],
45, 9,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),

(gen_random_uuid(),
'MSI PRO B650-P WIFI',
'Business-oriented AM5 motherboard featuring 12+2+1 power solution, DDR5 support, PCIe 4.0, dual M.2 slots, WiFi 6E, and 2.5G LAN. Includes Core Boost technology, premium thermal solution, and comprehensive business software suite.',
189.99,
'msi-pro-b650-p-wifi',
ARRAY['https://example.com/pro-b650-p.jpg'],
50, 10,
(SELECT id FROM sub_categories WHERE name = 'Motherboards'),
now()),






-- Microphone 20
(gen_random_uuid(),
'Shure SM7B',
'Professional-grade dynamic microphone favored by broadcasters and recording studios worldwide. Features a smooth, flat, wide-range frequency response appropriate for music and speech. Includes advanced electromagnetic shielding against broadband interference, and internal air suspension shock isolation. The classic cardioid polar pattern reduces background noise and controls feedback. Built-in pop filter and bass rolloff switch make it perfect for close-talk applications, podcasting, and vocal recording. Durable all-metal construction ensures years of reliable performance.',
399.99,
'shure-sm7b',
ARRAY['https://example.com/shure-sm7b.jpg'],
25, 5,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Blue Yeti X',
'Professional USB condenser microphone featuring four-capsule array and high-res LED metering. Offers four polar patterns: cardioid, omnidirectional, bidirectional, and stereo. Advanced Blue VOICE technology includes broadcast vocal effects and HD audio samples. Custom three-capsule design produces clear, powerful, broadcast-quality sound for streaming, podcasting, and voice-overs. Features smart knob for precise control over gain, mute, headphone volume, and blend. Real-time LED metering helps maintain optimal sound levels.',
169.99,
'blue-yeti-x',
ARRAY['https://example.com/blue-yeti-x.jpg'],
40, 8,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Audio-Technica AT2020USB+',
'Professional-grade USB condenser microphone ideal for home studio recording and streaming. Features high-quality A/D converter with 16-bit, 44.1/48 kHz sampling rate. Cardioid polar pattern reduces pickup of unwanted sounds from the sides and rear. Built-in headphone jack with volume control for direct monitoring. High output internal headphone amplifier delivers superior clarity and musical detail. Includes tripod desk stand, pivoting stand mount, USB cable, and storage pouch.',
149.99,
'audio-technica-at2020-usb-plus',
ARRAY['https://example.com/at2020-plus.jpg'],
35, 7,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Rode NT1-A',
'Professional large-diaphragm studio condenser microphone known for its warmth and clarity. Features one of the worlds quietest studio microphones with self-noise of only 5dBA. Wide dynamic range and extended frequency response capture subtle details. Gold-sputtered 1" capsule provides incredible transparency. Includes shock mount, pop filter, dust cover, and XLR cable. Ultra-low noise, transformerless circuitry virtually eliminates background noise. Perfect for vocal recording, podcasting, and voice-over work.',
269.99,
'rode-nt1a',
ARRAY['https://example.com/rode-nt1a.jpg'],
20, 4,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Elgato Wave:3',
'Premium USB condenser microphone designed specifically for content creators. Features proprietary Clipguard technology that prevents audio distortion. Multi-function dial provides easy control over input gain, monitoring volume, and crossfade. 96kHz / 24-bit analog to digital converter ensures pristine audio quality. Tight cardioid polar pattern minimizes room noise. Includes Wave Link software for advanced audio mixing and routing. Sleek design with capacitive mute touch sensor.',
159.99,
'elgato-wave-3',
ARRAY['https://example.com/elgato-wave3.jpg'],
30, 6,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'HyperX QuadCast S',
'RGB USB condenser gaming microphone with tap-to-mute sensor and dynamic lighting effects. Features four selectable polar patterns: stereo, omnidirectional, cardioid, and bidirectional. Anti-vibration shock mount and built-in pop filter reduce unwanted noise. Gain control adjustment and mount adapter included. Customizable RGB lighting adds style to any setup. Built-in headphone output for real-time monitoring. Compatible with major streaming platforms and Discord-certified.',
159.99,
'hyperx-quadcast-s',
ARRAY['https://example.com/quadcast-s.jpg'],
45, 9,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Razer Seiren Elite',
'Professional-grade USB dynamic microphone designed for streaming and content creation. Features single dynamic capsule for rich, warm vocal presence. Built-in high-pass filter eliminates low-frequency vibrations. Digital/analog limiter prevents audio distortion from sudden volume spikes. Zero-latency 3.5mm headphone monitoring port. Includes interchangeable gooseneck stand with built-in shock mount. Professional grade build quality with matte black finish.',
199.99,
'razer-seiren-elite',
ARRAY['https://example.com/seiren-elite.jpg'],
25, 5,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'AKG P220',
'Professional large-diaphragm true condenser microphone offering exceptional sound quality. Features 1" diaphragm with low mass for superior transient response. Switchable bass-cut filter and pad for close-up recording and high-SPL applications. All-metal design with robust construction for reliability. Cardioid polar pattern minimizes off-axis sound. Includes spider-type shock mount and aluminum carrying case. Ideal for vocal recording, acoustic instruments, and overhead drum miking.',
149.99,
'akg-p220',
ARRAY['https://example.com/akg-p220.jpg'],
20, 4,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Samson G-Track Pro',
'Professional USB condenser microphone with built-in audio interface. Features dual-track recording capability for recording microphone and instrument simultaneously. Three selectable pickup patterns: cardioid, bidirectional, and omnidirectional. 1" condenser capsule with 24-bit/96kHz resolution. Built-in mixer with independent controls for microphone and instrument levels. Zero-latency monitoring through 1/8" headphone output. Robust, die-cast construction with heavy-gauge mesh grille.',
129.99,
'samson-gtrack-pro',
ARRAY['https://example.com/gtrack-pro.jpg'],
30, 6,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'MAONO AU-PM421',
'Professional USB condenser microphone kit for streaming and podcasting. Features cardioid polar pattern for focused sound capture. Built-in sound card with 192kHz/24bit sampling rate. Includes adjustable boom arm, shock mount, and pop filter. Zero-latency monitoring through 3.5mm headphone jack. Plug and play compatibility with Windows and Mac. Aluminum alloy construction ensures durability. Touch-sensitive mute button with LED indicator.',
89.99,
'maono-au-pm421',
ARRAY['https://example.com/maono-pm421.jpg'],
50, 10,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Beyerdynamic M 70 Pro X',
'Professional dynamic microphone designed for broadcasting and streaming. Features optimized proximity effect for consistent sound regardless of distance. Internal shock mount minimizes handling noise. Supercardioid polar pattern for excellent isolation and feedback rejection. Rugged all-metal construction with hardened steel mesh grille. Includes threaded brass adapter and carrying pouch. Exceptional off-axis rejection for professional broadcast applications.',
299.99,
'beyerdynamic-m70-pro-x',
ARRAY['https://example.com/m70-pro-x.jpg'],
15, 3,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'PreSonus PD-70',
'Dynamic broadcast microphone designed for professional podcasting and voice-over work. Features dynamic capsule with natural, broadcast-ready sound. End-address design with superior off-axis rejection. Internal shock mount reduces handling noise and vibration. Focused cardioid polar pattern minimizes room noise. Includes adjustable stand adapter and storage bag. All-metal construction ensures long-term durability.',
129.99,
'presonus-pd-70',
ARRAY['https://example.com/pd-70.jpg'],
25, 5,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Earthworks ICON Pro',
'Premium USB streaming microphone with broadcast-quality sound. Features patented polar technology for consistent frequency response at all angles. Zero-latency monitoring with mix control. Precision-machined steel and aluminum construction. Built-in LED ring light with adjustable brightness and color temperature. Includes desktop stand with integrated cable management. Exceptional transient response and detail resolution.',
349.99,
'earthworks-icon-pro',
ARRAY['https://example.com/icon-pro.jpg'],
10, 2,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Mackie Carbon',
'Professional USB-C condenser microphone for content creation. Features dual capsule design with four polar patterns. Onboard DSP with filter and compressor presets. Built-in headphone amplifier with zero-latency monitoring. Includes desktop stand and USB-C cable. Smart knob control for gain, headphone level, and mix blend. Compatible with major streaming and recording platforms.',
179.99,
'mackie-carbon',
ARRAY['https://example.com/mackie-carbon.jpg'],
35, 7,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'RØDE PodMic',
'Dynamic broadcast microphone optimized for podcasting and voice-over. Features internal pop filter and shock mounting. Optimized frequency response for voice reproduction. Robust all-metal construction with premium finish. Internal acoustic mesh filter reduces plosives. Includes mounting clip with 3/8" thread adapter. Perfect for professional broadcast applications and podcast production.',
99.99,
'rode-podmic',
ARRAY['https://example.com/podmic.jpg'],
40, 8,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Antelope Edge Solo',
'Modeling microphone with dual-membrane capsule and advanced DSP processing. Features real-time microphone emulation technology. Built-in FPGA processing for ultra-low latency. Includes extensive microphone modeling library. Precision-crafted brass capsule with gold-sputtered membrane. Connects via USB-C with 24-bit/192kHz resolution. Professional-grade construction with wooden storage case.',
699.99,
'antelope-edge-solo',
ARRAY['https://example.com/edge-solo.jpg'],
8, 2,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'Neat King Bee II',
'Professional large-diaphragm condenser microphone with custom capsule design. Features center-terminated, gold-sputtered capsule for exceptional detail. Custom-tuned electronics for ultra-low noise performance. Includes shock mount and pop filter. Extended frequency response captures subtle nuances. Robust construction with precision-machined components. Perfect for vocal recording and instrument miking.',
169.99,
'neat-king-bee-2',
ARRAY['https://example.com/king-bee-2.jpg'],
20, 4,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'JLab Talk Pro',
'Professional USB condenser microphone with studio-quality resolution. Features four directional pattern modes for versatile recording. 192kHz sample rate with 24-bit depth. Built-in headphone monitoring with volume control. RGB indicator lights for quick visual feedback. Includes adjustable stand and USB-C cable. Compatible with major operating systems and recording software.',
149.99,
'jlab-talk-pro',
ARRAY['https://example.com/talk-pro.jpg'],
30, 6,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'AVerMedia Live Streamer MIC 330',
'USB condenser microphone designed for gaming and streaming. Features unidirectional pickup pattern for focused sound capture. Built-in vocal effects and audio mixing. RGB lighting with customizable effects. Zero-latency monitoring through 3.5mm output. Includes desktop stand and USB cable. Stream-deck integration for easy control.',
99.99,
'avermedia-mic-330',
ARRAY['https://example.com/mic-330.jpg'],
45, 9,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now()),

(gen_random_uuid(),
'EPOS B20',
'Premium streaming microphone with studio-grade audio quality. Features four pickup patterns for versatile recording. Aluminum construction with sleek design. Built-in headphone amplifier for zero-latency monitoring. Digital audio enhancement with EPOS Gaming Suite. LED status indicators and touch-sensitive controls. Includes desk stand with integrated cable management.',
199.99,
'epos-b20',
ARRAY['https://example.com/epos-b20.jpg'],
25, 5,
(SELECT id FROM sub_categories WHERE name = 'Microphones'),
now());


 
UPDATE products
SET img = ARRAY['/product-images/1.webp', '/product-images/2.webp', '/product-images/3.webp', '/product-images/4.webp', '/product-images/5.webp'];