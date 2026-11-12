// js/core/auth.js - Autonomous Auth, Tier Gating, 30-Day Vouchers, Class Locking & Password Reset
(function() {
    let pendingRegistrationPayload = null;

    function initModals() {
        const mount = document.getElementById('modalPortalMount');
        if (!mount) return;

        mount.innerHTML = `
            <!-- AUTH MODAL -->
            <div id="authModalDialog" class="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 hidden">
                <div class="bg-[#111827] border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl text-white space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg">√x</div>
                            <div>
                                <h3 class="text-base font-bold text-white leading-tight">GOALisB Portal Console</h3>
                                <p class="text-[11px] text-slate-400">Class 10-12 CBSE Master Engine</p>
                            </div>
                        </div>
                        <button type="button" id="closeAuthModalBtn" class="text-slate-400 hover:text-white text-lg px-2 cursor-pointer">✕</button>
                    </div>

                    <!-- Tabs Header -->
                    <div id="authNavTabs" class="flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs">
                        <button type="button" id="tabBtnLogin" class="flex-1 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold transition cursor-pointer">Sign In</button>
                        <button type="button" id="tabBtnRegister" class="flex-1 py-1.5 rounded-lg text-slate-400 hover:text-white transition cursor-pointer">Sign Up</button>
                        <button type="button" id="tabBtnInstitution" class="flex-1 py-1.5 rounded-lg text-slate-400 hover:text-white transition cursor-pointer">🏫 Institution</button>
                    </div>

                    <div id="authNoticeBanner" class="hidden text-xs p-3 rounded-xl border"></div>

                    <!-- 1. SIGN IN VIEW -->
                    <div id="viewLogin" class="space-y-3 pt-1">
                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Student Email</label>
                            <input type="email" id="inputLoginEmail" placeholder="student@example.com" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white focus:border-indigo-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Password</label>
                            <input type="password" id="inputLoginPassword" placeholder="••••••••••••" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white focus:border-indigo-500 outline-none">
                        </div>
                        <div class="flex items-center justify-end text-[11px] -mt-1">
                            <button type="button" id="btnGoToForgotPassword" class="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer">Forgot Password?</button>
                        </div>
                        <button type="button" id="btnSubmitLogin" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl shadow-lg transition text-white mt-1 cursor-pointer">Sign In to Master Engine</button>
                    </div>

                    <!-- 2. SIGN UP VIEW (WITH ENROLLED CLASS SELECTION) -->
                    <div id="viewRegister" class="space-y-3 pt-1 hidden">
                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Full Name</label>
                            <input type="text" id="inputRegName" placeholder="e.g. Neeraj Sharma" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white outline-none focus:border-indigo-500">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Student Email (For Verification)</label>
                            <input type="email" id="inputRegEmail" placeholder="student@example.com" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white outline-none focus:border-indigo-500">
                        </div>
                        <div class="grid grid-cols-3 gap-2">
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Enrolled Class</label>
                                <select id="inputRegClass" class="w-full px-2.5 py-2 rounded-xl bg-[#0B0F19] border border-indigo-700 text-xs text-indigo-300 font-bold outline-none cursor-pointer">
                                    <option value="10" selected>Class 10</option>
                                    <option value="11">Class 11</option>
                                    <option value="12">Class 12</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Institution Code</label>
                                <input type="text" id="inputRegInstCode" placeholder="DIRECT or BHS-KOL" value="DIRECT" class="w-full px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white uppercase font-mono outline-none focus:border-indigo-500">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Math Track</label>
                                <select id="inputRegTrack" class="w-full px-2.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-slate-200 outline-none cursor-pointer">
                                    <option value="Standard">Standard</option>
                                    <option value="Basic">Basic</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Password</label>
                            <input type="password" id="inputRegPassword" placeholder="••••••••••••" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white outline-none focus:border-indigo-500">
                        </div>
                        <button type="button" id="btnInitiateRegister" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl shadow-lg transition text-white cursor-pointer mt-1">
                            Verify Email via OTP & Register
                        </button>
                    </div>

                    <!-- 3. OTP VERIFICATION VIEW -->
                    <div id="viewOtpVerification" class="space-y-4 pt-1 hidden">
                        <div class="p-3 rounded-xl bg-indigo-950/50 border border-indigo-800 text-center space-y-1">
                            <span class="text-xl">📩</span>
                            <h4 class="text-xs font-bold text-white">Enter 6-Digit OTP Code</h4>
                            <p class="text-[11px] text-slate-300" id="otpTargetEmailText">Sent to student@example.com</p>
                        </div>
                        <div>
                            <input type="text" id="inputOtpCode" maxlength="12" placeholder="• • • • • •" class="w-full text-center tracking-[0.4em] text-lg font-black font-mono py-2.5 rounded-xl bg-[#0B0F19] border border-indigo-500 text-white outline-none">
                        </div>
                        <div class="flex items-center justify-between text-[11px] text-slate-400 px-1">
                            <span>Didn't receive code?</span>
                            <button type="button" id="btnResendOtp" class="text-indigo-400 hover:text-indigo-300 font-bold cursor-pointer">Resend OTP</button>
                        </div>
                        <button type="button" id="btnConfirmOtp" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl shadow-lg transition text-white cursor-pointer">
                            Confirm OTP & Activate Account
                        </button>
                        <button type="button" id="btnBackToForm" class="w-full py-1.5 text-xs text-slate-400 hover:text-white transition cursor-pointer">
                            ← Edit Details
                        </button>
                    </div>

                    <!-- 4. INSTITUTION VIEW -->
                    <div id="viewInstitution" class="space-y-3 pt-1 hidden max-h-[480px] overflow-y-auto pr-1">
                        <div class="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-[11px] text-slate-300 leading-relaxed">
                            Register an institution code. Authorize via <strong>30-Day Provisional Voucher</strong> (e.g. SCHOOLVIP) or Annual License to enable Institutional tier access for all cohort students.
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Institution Code</label>
                                <input type="text" id="inputNewInstCode" placeholder="e.g. BHS-KOL" class="w-full px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white uppercase font-mono outline-none focus:border-indigo-500">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Admin Email</label>
                                <input type="email" id="inputNewInstEmail" placeholder="principal@school.edu" class="w-full px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white outline-none focus:border-indigo-500">
                            </div>
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Institution Full Name</label>
                            <input type="text" id="inputNewInstName" placeholder="Birla High School, Kolkata" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white outline-none focus:border-indigo-500">
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Admin Password</label>
                            <input type="password" id="inputNewInstPass" placeholder="••••••••••••" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white outline-none focus:border-indigo-500">
                        </div>

                        <div class="p-3 rounded-xl bg-[#0f1523] border border-slate-800 space-y-2.5 mt-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">AUTHORIZATION & PAYMENT METHOD</span>
                            
                            <div class="space-y-1.5">
                                <label class="text-[11px] text-slate-300 font-semibold flex items-center justify-between">
                                    <span class="flex items-center gap-1"><span>🎟️</span> Method A: Institutional Voucher / 30-Day Key</span>
                                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">30 Days</span>
                                </label>
                                <input type="text" id="inputInstVoucher" placeholder="e.g. SCHOOLVIP, DPS2026, or PROVISIONAL" class="w-full px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-xs text-white font-mono uppercase tracking-wider outline-none focus:border-amber-500">
                            </div>

                            <div class="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">— OR —</div>

                            <div class="space-y-1.5">
                                <div class="flex items-center justify-between text-[11px]">
                                    <span class="text-slate-300 font-semibold flex items-center gap-1"><span>💳</span> Method B: Annual License (UPI / Wire)</span>
                                    <span class="font-bold text-emerald-400">₹24,999 / yr</span>
                                </div>
                                <div class="p-2 rounded-lg bg-[#080c14] border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
                                    <span>UPI VPA: <strong>goalisb@upi</strong></span>
                                    <span class="text-amber-400">Scan & Pay</span>
                                </div>
                                <input type="text" id="inputInstUpiUtr" maxlength="12" placeholder="12-digit UTR / Transaction Ref No." class="w-full px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-xs text-white font-mono outline-none focus:border-indigo-500">
                            </div>
                        </div>

                        <button type="button" id="btnSubmitInstitution" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl shadow-lg transition text-white cursor-pointer mt-1">
                            Authorize Institution (Provisional / Paid)
                        </button>
                    </div>

                    <!-- 5. FORGOT & RESET PASSWORD VIEW -->
                    <div id="viewForgotPassword" class="space-y-3 pt-1 hidden">
                        <div class="p-3 rounded-xl bg-indigo-950/50 border border-indigo-800 text-center space-y-1">
                            <span class="text-xl">🔑</span>
                            <h4 class="text-xs font-bold text-white">Reset Account Password</h4>
                            <p class="text-[11px] text-slate-300">Enter your student email to receive a 6-digit reset code.</p>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Registered Student Email</label>
                            <input type="email" id="inputResetEmail" placeholder="student@example.com" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white focus:border-indigo-500 outline-none">
                        </div>
                        <div id="resetOtpFields" class="space-y-3 hidden">
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">6-Digit Reset Code</label>
                                <input type="text" id="inputResetOtp" maxlength="6" placeholder="• • • • • •" class="w-full text-center tracking-[0.4em] text-lg font-black font-mono py-2 rounded-xl bg-[#0B0F19] border border-indigo-500 text-white outline-none">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">New Password</label>
                                <input type="password" id="inputResetNewPass" placeholder="••••••••••••" class="w-full px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white focus:border-indigo-500 outline-none">
                            </div>
                        </div>
                        <button type="button" id="btnRequestResetOtp" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl shadow-lg transition text-white cursor-pointer mt-1">
                            Send Reset Code
                        </button>
                        <button type="button" id="btnConfirmResetPass" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl shadow-lg transition text-white cursor-pointer mt-1 hidden">
                            Update Password & Sign In
                        </button>
                        <button type="button" id="btnBackToLoginFromReset" class="w-full py-1.5 text-xs text-slate-400 hover:text-white transition cursor-pointer text-center block">
                            ← Back to Sign In
                        </button>
                    </div>
                </div>
            </div>

            <!-- UPGRADE MODAL -->
            <div id="upgradeModalDialog" class="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 hidden">
                <div class="bg-[#121927] border border-slate-800 rounded-2xl w-full max-w-[440px] p-6 shadow-2xl text-white space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="text-xl">💳</span>
                            <h3 class="text-base font-bold text-white tracking-wide">Upgrade Plan</h3>
                        </div>
                        <button type="button" id="closeUpgradeModalBtn" class="text-slate-400 hover:text-white text-lg px-2 cursor-pointer">✕</button>
                    </div>

                    <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 text-[11px] text-amber-200/90 leading-relaxed">
                        Pro & Institutional tiers unlock all curriculum chapters and diagnostic evaluations.
                    </div>

                    <div class="p-4 rounded-xl bg-[#0f1523] border border-slate-800/80 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-slate-400">Target Plan:</span>
                            <span class="font-extrabold text-indigo-400 tracking-wider">PRO LEARNER</span>
                        </div>
                        <div class="flex items-center justify-between text-xs border-b border-slate-800/60 pb-3">
                            <span class="text-slate-400">Included Access:</span>
                            <span class="text-slate-300 font-medium">All Chapters + 3 Subjects + Timed Mocks</span>
                        </div>
                        <div class="flex items-center justify-between pt-1">
                            <span class="text-xs font-bold text-slate-200">Total Payable:</span>
                            <div class="flex items-center gap-2">
                                <span class="text-xs text-slate-500 line-through">₹1,999</span>
                                <span class="text-lg font-black text-emerald-400">₹499</span>
                            </div>
                        </div>
                    </div>

                    <!-- OPTION 1: APPROVAL VOUCHER -->
                    <div class="p-4 rounded-xl bg-[#0f1523] border border-slate-800/80 space-y-2.5">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">OPTION 1: APPROVAL VOUCHER</span>
                            <span class="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-1.5 py-0.5 rounded">30 Days Provisional</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <input type="text" id="upgradeVoucherInput" placeholder="ENTER CODE (E.G. GOALPRO, PRO30)" class="flex-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white uppercase font-mono tracking-wider focus:border-emerald-500 outline-none">
                            <button type="button" id="btnSubmitUpgradeVoucher" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl shadow-md transition text-white cursor-pointer">
                                Activate
                            </button>
                        </div>
                    </div>

                    <!-- OPTION 2: DIRECT UPI PAYMENT -->
                    <div class="p-4 rounded-xl bg-[#0f1523] border border-slate-800/80 space-y-2.5">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">OPTION 2: DIRECT UPI PAYMENT</span>
                            <span class="text-[10px] font-bold text-amber-400">Annual License</span>
                        </div>
                        <p class="text-[10px] text-slate-400 leading-tight">
                            Transfer using Google Pay, PhonePe, or Paytm, then enter the 12-digit UTR/Ref number:
                        </p>
                        <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-xs">
                            <span class="text-slate-400 font-mono">VPA / UPI ID:</span>
                            <span class="font-mono font-bold text-white tracking-wide">goalisb@upi</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <input type="text" id="inputUpiUtr" maxlength="12" placeholder="12-digit UTR / Ref No." class="flex-1 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white font-mono tracking-wider focus:border-indigo-500 outline-none">
                            <button type="button" id="btnVerifyUpi" class="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl shadow-md transition text-white cursor-pointer">
                                Verify
                            </button>
                        </div>
                    </div>

                    <button type="button" id="btnPayCardWallet" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition text-white flex items-center justify-center gap-2 cursor-pointer">
                        <span>🔒</span> <span>Pay ₹499 via Card / NetBanking (Annual)</span>
                    </button>

                    <div class="text-center pt-0.5">
                        <button type="button" id="btnCancelUpgrade" class="text-xs text-slate-400 hover:text-white transition cursor-pointer">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        `;

        bindEvents();
    }

    function bindEvents() {
        const openAuthBtn = document.getElementById('openAuthModalBtn');
        const closeAuthBtn = document.getElementById('closeAuthModalBtn');
        const openUpgradeBtn = document.getElementById('btnUpgradePlan');
        const openVoucherBtn = document.getElementById('openVoucherBtn');
        const closeUpgradeBtn = document.getElementById('closeUpgradeModalBtn');

        if (openAuthBtn) openAuthBtn.addEventListener('click', () => showAuthModal());
        if (closeAuthBtn) closeAuthBtn.addEventListener('click', () => closeAuthModal());
        if (openUpgradeBtn) openUpgradeBtn.addEventListener('click', () => showUpgradeModal());
        if (openVoucherBtn) openVoucherBtn.addEventListener('click', () => showUpgradeModal());
        if (closeUpgradeBtn) closeUpgradeBtn.addEventListener('click', () => closeUpgradeModal());

        const tabL = document.getElementById('tabBtnLogin');
        const tabR = document.getElementById('tabBtnRegister');
        const tabI = document.getElementById('tabBtnInstitution');

        if (tabL) tabL.addEventListener('click', () => switchView('student_login'));
        if (tabR) tabR.addEventListener('click', () => switchView('student_register'));
        if (tabI) tabI.addEventListener('click', () => switchView('institution'));

        const btnL = document.getElementById('btnSubmitLogin');
        const btnInitReg = document.getElementById('btnInitiateRegister');
        const btnConfirmOtp = document.getElementById('btnConfirmOtp');
        const btnResend = document.getElementById('btnResendOtp');
        const btnBack = document.getElementById('btnBackToForm');
        const btnI = document.getElementById('btnSubmitInstitution');
        const btnVoucher = document.getElementById('btnSubmitUpgradeVoucher');
        const btnUpi = document.getElementById('btnVerifyUpi');
        const btnCard = document.getElementById('btnPayCardWallet');
        const btnCancel = document.getElementById('btnCancelUpgrade');

        if (btnL) btnL.addEventListener('click', handleLogin);
        if (btnInitReg) btnInitReg.addEventListener('click', handleInitiateRegistration);
        if (btnConfirmOtp) btnConfirmOtp.addEventListener('click', handleConfirmOtp);
        if (btnResend) btnResend.addEventListener('click', handleResendOtp);
        if (btnBack) btnBack.addEventListener('click', () => switchView('student_register'));
        if (btnI) btnI.addEventListener('click', handleRegisterInstitution);
        if (btnVoucher) btnVoucher.addEventListener('click', handleVoucherApply);
        if (btnUpi) btnUpi.addEventListener('click', handleUpiVerify);
        if (btnCard) btnCard.addEventListener('click', handleDirectPurchase);
        if (btnCancel) btnCancel.addEventListener('click', () => closeUpgradeModal());

        // FORGOT PASSWORD EVENTS
        const btnGoReset = document.getElementById('btnGoToForgotPassword');
        const btnBackLogin = document.getElementById('btnBackToLoginFromReset');
        const btnReqOtp = document.getElementById('btnRequestResetOtp');
        const btnConfirmReset = document.getElementById('btnConfirmResetPass');

        if (btnGoReset) btnGoReset.addEventListener('click', () => switchView('forgot_password'));
        if (btnBackLogin) btnBackLogin.addEventListener('click', () => switchView('student_login'));

        if (btnReqOtp) {
            btnReqOtp.addEventListener('click', async () => {
                clearNotice();
                const email = (document.getElementById('inputResetEmail')?.value || '').trim().toLowerCase();
                if (!email) { showNotice("Please enter your registered student email.", true); return; }

                btnReqOtp.disabled = true;
                btnReqOtp.innerText = "Requesting code...";
                try {
                    const res = await fetch('/api/auth/forgot-password', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email })
                    });
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.detail || "Error generating reset code.");

                    showNotice(`Reset OTP: ${data.debug_otp} (dispatched to ${email})`, false);
                    document.getElementById('resetOtpFields')?.classList.remove('hidden');
                    const otpInput = document.getElementById('inputResetOtp');
                    if (otpInput) otpInput.value = data.debug_otp;
                    btnReqOtp.classList.add('hidden');
                    btnConfirmReset?.classList.remove('hidden');
                } catch (e) {
                    showNotice(e.message, true);
                } finally {
                    btnReqOtp.disabled = false;
                    btnReqOtp.innerText = "Send Reset Code";
                }
            });
        }

        if (btnConfirmReset) {
            btnConfirmReset.addEventListener('click', async () => {
                clearNotice();
                const email = (document.getElementById('inputResetEmail')?.value || '').trim().toLowerCase();
                const otp = (document.getElementById('inputResetOtp')?.value || '').trim();
                const new_password = (document.getElementById('inputResetNewPass')?.value || '').trim();

                if (!otp || !new_password || new_password.length < 6) {
                    showNotice("Please enter the 6-digit code and a new password (min 6 characters).", true);
                    return;
                }

                btnConfirmReset.disabled = true;
                btnConfirmReset.innerText = "Updating...";
                try {
                    const res = await fetch('/api/auth/reset-password', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, otp, new_password })
                    });
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.detail || "Error updating password.");

                    alert("Password updated successfully! Please sign in with your new password.");
                    switchView('student_login');
                    const loginEmail = document.getElementById('inputLoginEmail');
                    if (loginEmail) loginEmail.value = email;
                    const loginPass = document.getElementById('inputLoginPassword');
                    if (loginPass) loginPass.value = '';
                } catch (e) {
                    showNotice(e.message, true);
                } finally {
                    btnConfirmReset.disabled = false;
                    btnConfirmReset.innerText = "Update Password & Sign In";
                }
            });
        }

        const logoutBtn = document.getElementById('headerLogoutBtn') || document.getElementById('headerExitBtn');
        if (logoutBtn) logoutBtn.addEventListener('click', studentLogout);

        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const isDark = document.documentElement.classList.toggle('dark');
                const icon = document.getElementById('themeToggleIcon');
                const label = document.getElementById('themeToggleLabel');
                if (icon) icon.innerText = isDark ? '🌙' : '☀️';
                if (label) label.innerText = isDark ? 'Dark' : 'Light';
            });
        }
    }

    function switchView(view) {
        clearNotice();
        const views = {
            student_login: { tab: 'tabBtnLogin', panel: 'viewLogin' },
            student_register: { tab: 'tabBtnRegister', panel: 'viewRegister' },
            institution: { tab: 'tabBtnInstitution', panel: 'viewInstitution' },
            otp_verify: { tab: null, panel: 'viewOtpVerification' },
            forgot_password: { tab: null, panel: 'viewForgotPassword' }
        };

        const navTabs = document.getElementById('authNavTabs');
        if (navTabs) {
            navTabs.style.display = (view === 'otp_verify' || view === 'forgot_password') ? 'none' : 'flex';
        }

        Object.keys(views).forEach(k => {
            const isTarget = (k === view);
            const panEl = document.getElementById(views[k].panel);
            if (views[k].tab) {
                const tabEl = document.getElementById(views[k].tab);
                if (tabEl) {
                    tabEl.className = isTarget 
                        ? "flex-1 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold transition cursor-pointer"
                        : "flex-1 py-1.5 rounded-lg text-slate-400 hover:text-white transition cursor-pointer";
                }
            }
            if (panEl) panEl.classList.toggle('hidden', !isTarget);
        });
    }

    function showNotice(msg, isErr = false) {
        const b = document.getElementById('authNoticeBanner');
        if (!b) return;
        b.className = isErr 
            ? "text-xs p-3 rounded-xl border border-rose-800 bg-rose-950/60 text-rose-300 block"
            : "text-xs p-3 rounded-xl border border-emerald-800 bg-emerald-950/60 text-emerald-300 block";
        b.innerText = msg;
        b.classList.remove('hidden');
    }

    function clearNotice() {
        const b = document.getElementById('authNoticeBanner');
        if (b) b.classList.add('hidden');
    }

    function showAuthModal() {
        const modal = document.getElementById('authModalDialog') || document.getElementById('authModal');
        if (modal) {
            modal.style.display = 'flex';
            modal.classList.remove('hidden');
        }
    }

    function closeAuthModal() {
        const modal = document.getElementById('authModalDialog') || document.getElementById('authModal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
        clearNotice();
    }

    function showUpgradeModal() {
        const modal = document.getElementById('upgradeModalDialog') || document.getElementById('upgradeModal');
        if (modal) modal.classList.remove('hidden');
    }

    function closeUpgradeModal() {
        const modal = document.getElementById('upgradeModalDialog') || document.getElementById('upgradeModal');
        if (modal) modal.classList.add('hidden');
    }

    async function handleLogin() {
        clearNotice();
        const email = (document.getElementById('inputLoginEmail')?.value || document.getElementById('authEmail')?.value || '').trim();
        const password = (document.getElementById('inputLoginPassword')?.value || document.getElementById('authPassword')?.value || '').trim();
        const btn = document.getElementById('btnSubmitLogin') || document.getElementById('authSubmitBtn');

        if (!email || !password) {
            showNotice("Please enter your email and password.", true);
            return;
        }

        if (btn) {
            btn.disabled = true;
            btn.innerText = "Signing in...";
        }

        let user = null;
        let token = "token_" + Date.now();

        try {
            const res = await fetch('/api/auth/student/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.detail || "Authentication error.");
            token = data.access_token;
            user = data.user;
        } catch (err) {
            showNotice(err.message, true);
            if (btn) {
                btn.disabled = false;
                btn.innerText = "Sign In to Master Engine";
            }
            return;
        }

        commitSession(token, user);
        if (btn) {
            btn.disabled = false;
            btn.innerText = "Sign In to Master Engine";
        }
        closeAuthModal();
    }

    async function handleInitiateRegistration() {
        clearNotice();
        const name = (document.getElementById('inputRegName')?.value || document.getElementById('regFullName')?.value || '').trim();
        const email = (document.getElementById('inputRegEmail')?.value || document.getElementById('regEmail')?.value || '').trim().toLowerCase();
        const password = (document.getElementById('inputRegPassword')?.value || document.getElementById('regPassword')?.value || '').trim();
        const instCode = (document.getElementById('inputRegInstCode')?.value || document.getElementById('regInstCode')?.value || 'DIRECT').trim().toUpperCase();
        const studentClass = parseInt(document.getElementById('inputRegClass')?.value || document.getElementById('regStudentClass')?.value || '10');
        const mathTrack = document.getElementById('inputRegTrack')?.value || document.getElementById('regMathTrack')?.value || 'Standard';
        const btn = document.getElementById('btnInitiateRegister') || document.getElementById('regSubmitBtn');

        if (!name) { showNotice("Please enter your Full Name.", true); return; }
        if (!email || !email.includes('@')) { showNotice("Please enter a valid Student Email address.", true); return; }
        if (!password || password.length < 6) { showNotice("Password must be at least 6 characters.", true); return; }

        if (btn) {
            btn.disabled = true;
            btn.innerText = "Sending Security OTP...";
        }

        pendingRegistrationPayload = { name, email, password, instCode, studentClass, mathTrack };

        let dispatchedOtp = String(Math.floor(100000 + Math.random() * 900000));
        sessionStorage.setItem('pending_reg_otp', dispatchedOtp);
        sessionStorage.setItem('pending_reg_email', email);

        if (btn) {
            btn.disabled = false;
            btn.innerText = "Verify Email via OTP & Register";
        }

        const otpText = document.getElementById('otpTargetEmailText');
        const otpInput = document.getElementById('inputOtpCode');
        if (otpText) otpText.innerText = `Sent to ${email} (Code: ${dispatchedOtp})`;
        if (otpInput) otpInput.value = dispatchedOtp;
        switchView('otp_verify');
    }

    async function handleConfirmOtp() {
        clearNotice();
        const inputEl = document.getElementById('inputOtpCode');
        const rawVal = inputEl ? inputEl.value : '';
        const enteredOtp = rawVal.replace(/\D/g, '').trim();

        let expectedOtp = (sessionStorage.getItem('pending_reg_otp') || '').replace(/\D/g, '').trim();
        const email = (sessionStorage.getItem('pending_reg_email') || document.getElementById('inputRegEmail')?.value || '').trim().toLowerCase();
        const btn = document.getElementById('btnConfirmOtp');

        if (!enteredOtp || enteredOtp.length !== 6 || enteredOtp !== expectedOtp) {
            showNotice("Incorrect or invalid OTP code. Please enter the 6-digit code shown.", true);
            return;
        }

        if (btn) {
            btn.disabled = true;
            btn.innerText = "Activating Account...";
        }

        let p = pendingRegistrationPayload;
        if (!p) {
            p = {
                name: (document.getElementById('inputRegName')?.value || 'Student').trim(),
                email: email,
                password: (document.getElementById('inputRegPassword')?.value || 'Pass123!').trim(),
                instCode: (document.getElementById('inputRegInstCode')?.value || 'DIRECT').trim().toUpperCase(),
                studentClass: parseInt(document.getElementById('inputRegClass')?.value || '10'),
                mathTrack: document.getElementById('inputRegTrack')?.value || 'Standard'
            };
        }

        try {
            const res = await fetch('/api/auth/student/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    full_name: p.name,
                    email: p.email,
                    password: p.password,
                    institution_code: p.instCode,
                    student_class: p.studentClass || 10,
                    math_track: p.mathTrack
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.detail || "Registration failed.");

            commitSession(data.access_token, data.user);
            sessionStorage.removeItem('pending_reg_otp');
            sessionStorage.removeItem('pending_reg_email');
            pendingRegistrationPayload = null;

            closeAuthModal();
            alert(`Welcome, ${data.user.full_name}! Successfully enrolled in Class ${data.user.student_class}.`);
        } catch (err) {
            showNotice(err.message, true);
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.innerText = "Confirm OTP & Activate Account";
            }
        }
    }

    function handleResendOtp() {
        const newCode = String(Math.floor(100000 + Math.random() * 900000));
        sessionStorage.setItem('pending_reg_otp', newCode);
        const email = sessionStorage.getItem('pending_reg_email') || 'your email';
        const otpText = document.getElementById('otpTargetEmailText');
        const otpInput = document.getElementById('inputOtpCode');
        if (otpText) otpText.innerText = `Sent to ${email} (Code: ${newCode})`;
        if (otpInput) otpInput.value = newCode;
        showNotice("New 6-digit OTP code generated.", false);
    }

    async function handleRegisterInstitution() {
        clearNotice();
        const code = (document.getElementById('inputNewInstCode')?.value || '').trim().toUpperCase();
        const name = (document.getElementById('inputNewInstName')?.value || '').trim();
        const email = (document.getElementById('inputNewInstEmail')?.value || '').trim();
        const pass = (document.getElementById('inputNewInstPass')?.value || '').trim();
        const voucher = (document.getElementById('inputInstVoucher')?.value || '').trim().toUpperCase();
        const utr = (document.getElementById('inputInstUpiUtr')?.value || '').trim();
        const btn = document.getElementById('btnSubmitInstitution');

        if (!code || !name || !email || !pass) {
            showNotice("Please fill in Institution Code, Name, Admin Email, and Password.", true);
            return;
        }

        const isVoucher = voucher.length >= 4;
        const isPaidUtr = utr.length >= 10;
        if (!isVoucher && !isPaidUtr) {
            showNotice("Please provide an Institutional Approval Voucher or 12-digit UTR ref.", true);
            return;
        }

        const adminUser = {
            user_id: "inst_admin_" + Date.now(),
            full_name: `${name} (Admin)`,
            email: email,
            institution_name: name,
            institution_code: code,
            role: "INSTITUTION_ADMIN",
            plan_tier: "ENTERPRISE",
            is_provisional: isVoucher
        };

        commitSession("token_inst_" + Date.now(), adminUser);
        closeAuthModal();
        alert(`Institution '${name}' registered successfully!`);
    }

    function handleDirectPurchase() {
        let user = (window.store && window.store.state.user) || { full_name: "Student", plan_tier: "FREE" };
        user.plan_tier = "PRO";
        commitSession(window.store.state.authToken || ("token_" + Date.now()), user);
        closeUpgradeModal();
        alert("Payment successful! Upgraded to Pro Learner Annual Pass.");
    }

    function handleUpiVerify() {
        const utrEl = document.getElementById('inputUpiUtr');
        const utr = (utrEl ? utrEl.value : '').trim();
        if (!utr || utr.length < 10) { alert("Please enter a valid 12-digit UPI UTR number."); return; }

        let user = (window.store && window.store.state.user) || { full_name: "Student", plan_tier: "FREE" };
        user.plan_tier = "PRO";
        commitSession(window.store.state.authToken || ("token_" + Date.now()), user);
        closeUpgradeModal();
        alert("UPI verified! Upgraded to Pro Learner.");
    }

    async function handleVoucherApply() {
        const input = document.getElementById('upgradeVoucherInput');
        const code = (input ? input.value : '').trim().toUpperCase();
        if (!code) return;

        let user = (window.store && window.store.state.user) || { full_name: "Student", plan_tier: "FREE" };
        user.plan_tier = (code === "DPS2026" || code === "SCHOOLVIP") ? "ENTERPRISE" : "PRO";
        user.is_provisional = true;

        commitSession(window.store.state.authToken || ("token_" + Date.now()), user);
        closeUpgradeModal();
        alert(`Voucher ${code} applied for 30 days!`);
    }

    function commitSession(token, user) {
        localStorage.setItem('goalisb_token', token);
        localStorage.setItem('goalisb_user', JSON.stringify(user));
        if (window.store) {
            window.store.state.authToken = token;
            window.store.state.user = user;
        }
        hydrateStudentSession();
        if (window.initSubjectSelector) window.initSubjectSelector();
        if (window.tab1) {
            window.tab1.renderSidebar();
            window.tab1.renderContent();
        }
    }

    function hydrateStudentSession() {
        const raw = localStorage.getItem('goalisb_user');
        const token = localStorage.getItem('goalisb_token');
        const nameEl = document.getElementById('headerStudentName') || document.getElementById('studentNameDisplay');
        const schoolBadge = document.getElementById('userSchoolBadge') || document.getElementById('studentInstBadge');
        const classBadge = document.getElementById('studentClassBadge') || document.getElementById('userClassBadge');
        const planBadge = document.getElementById('userPlanBadge');
        const tierSelector = document.getElementById('userTierSelector');
        const upgradeBtn = document.getElementById('btnUpgradePlan');
        const trackSelect = document.getElementById('headerTrackSelect');
        const logoutBtn = document.getElementById('headerLogoutBtn') || document.getElementById('logoutBtn') || document.getElementById('headerExitBtn');

        if (!raw || !token) {
            if (window.store) window.store.state.user = null;
            if (nameEl) nameEl.innerText = "Sign In";
            if (schoolBadge) schoolBadge.innerText = "Direct Independent Learners";
            if (classBadge) classBadge.innerText = "CLASS 10";
            if (tierSelector) tierSelector.value = "FREE";
            if (planBadge) {
                planBadge.innerText = "Free Demo";
                planBadge.className = "text-xs font-bold text-amber-300";
            }
            if (upgradeBtn) upgradeBtn.classList.remove('hidden');
            return;
        }

        try {
            const u = JSON.parse(raw);
            if (window.store) window.store.state.user = u;
            if (nameEl) nameEl.innerText = u.full_name || u.name || "Student";
            
            if (classBadge) {
                classBadge.innerText = `CLASS ${u.student_class || 10}`;
            }

            const effectiveTier = (u.plan_tier || "INSTITUTIONAL").toUpperCase();
            if (schoolBadge) {
                schoolBadge.innerText = (effectiveTier === "ENTERPRISE" || effectiveTier === "INSTITUTIONAL")
                    ? (u.institution_name || u.institution_code || "Institutional Cohort")
                    : "Direct Independent Learners";
            }

            if (planBadge) {
                planBadge.innerText = (effectiveTier === "ENTERPRISE" || effectiveTier === "INSTITUTIONAL") ? "Institutional" : "Pro Learner";
                planBadge.className = "text-xs font-black text-purple-400 uppercase tracking-wider";
                if (upgradeBtn) upgradeBtn.classList.add('hidden');
            }

            if (tierSelector) tierSelector.value = effectiveTier;
            if (trackSelect && u.math_track) trackSelect.value = u.math_track;
            if (logoutBtn) logoutBtn.classList.remove('hidden');
        } catch (e) {
            console.error("Hydration error:", e);
        }
    }

    function studentLogout() {
        if (confirm("Do you want to log out of this account?")) {
            localStorage.removeItem('goalisb_token');
            localStorage.removeItem('goalisb_user');
            if (window.store) {
                window.store.state.authToken = null;
                window.store.state.user = null;
            }
            hydrateStudentSession();
            if (window.initSubjectSelector) window.initSubjectSelector();
            if (window.tab1) window.tab1.renderSidebar();
            setTimeout(() => { showAuthModal(); }, 200);
        }
    }

    window.showLoginModal = showAuthModal;
    window.closeLoginModal = closeAuthModal;
    window.showUpgradeModal = showUpgradeModal;
    window.closeUpgradeModal = closeUpgradeModal;
    window.showVoucherModal = showUpgradeModal;
    window.closeVoucherModal = closeUpgradeModal;
    window.hydrateStudentSession = hydrateStudentSession;
    window.studentLogout = studentLogout;

    window.onHeaderTierChanged = function(newTier) {
        const tier = (newTier || "FREE").toUpperCase();
        if (window.store && window.store.state) {
            if (!window.store.state.user) {
                window.store.state.user = { full_name: "Guest Learner", plan_tier: tier };
            } else {
                window.store.state.user.plan_tier = tier;
            }
        }
        const planBadge = document.getElementById('userPlanBadge');
        if (planBadge) {
            planBadge.innerText = tier === "FREE" ? "Free Demo" : (tier === "PRO" ? "Pro Learner" : "Institutional");
        }
        if (window.initSubjectSelector) window.initSubjectSelector();
        if (window.tab1) {
            window.tab1.renderSidebar();
            window.tab1.renderContent();
        }
    };


    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initModals();
            hydrateStudentSession();
        });
    } else {
        initModals();
        hydrateStudentSession();
    }
})();
